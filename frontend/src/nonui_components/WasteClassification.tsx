/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { getPredictions } from '@/ibmService';
import { Button } from '@/components/ui/button';
import toast, { Toaster } from 'react-hot-toast';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface Prediction {
    accuracy: string;
    category: string;
    name: string;
    [key: string]: any;
}

const WasteClassification: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [prediction, setPrediction] = useState<Prediction | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(false)

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFile(event.target.files[0]);
            setPreviewUrl(URL.createObjectURL(event.target.files[0]));
        }
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (!selectedFile) {
            toast.error('Choose an image first!')
            return;
        }

        try {
            setLoading(true)
            const result = await getPredictions(selectedFile);
            setPrediction(result);
            toast.success('Prediction success!')
        } catch (error) {
            console.error('Error making prediction:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='text-white flex flex-col items-center justify-center'>
            <Toaster />
            {previewUrl && (
                <div className="mt-5">
                    <p>Image Preview:</p>
                    <img src={previewUrl} alt="Preview" className="w-[300px] h-[300px] rounded-md border m-2" />
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <input type="file" accept="image/*" onChange={handleFileChange} />
                <Button type="submit">Classify</Button>
            </form>
            {loading ? (

                <>
                    <span className='mt-12'> Predicting...</span>
                    <span className='loader mt-12'></span>
                </>

            ) : (
                prediction && (
                    <div className='mt-5 flex flex-col gap-3 justify-center items-center'>
                        <p>Prediction result</p>
                        <div className='p-3 border rounded-lg'>

                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px] text-white">Accuracy</TableHead>
                                        <TableHead className='text-white'>Category</TableHead>
                                        <TableHead className='text-white'>File Name</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className={`font-medium ${parseFloat(prediction.accuracy) <= 30
                                            ? "text-red-500"
                                            : parseFloat(prediction.accuracy) <= 60
                                                ? "text-yellow-500"
                                                : "text-green-500"
                                            }`}>
                                            {prediction.accuracy}
                                        </TableCell>
                                        <TableCell>{prediction.category}</TableCell>
                                        <TableCell>{prediction.name}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>

                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default WasteClassification;
