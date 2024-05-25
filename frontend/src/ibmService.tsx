/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const PREDICTIONS_URL = 'http://localhost:5000/result';

interface PredictionResponse {
    accuracy: string;
    category: string;
    name: string;
    [key: string]: any;
}

const getPredictions = async (file: File): Promise<PredictionResponse> => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post<PredictionResponse>(PREDICTIONS_URL, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    return response.data;
};

export { getPredictions };
