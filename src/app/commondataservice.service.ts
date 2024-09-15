import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class CommondataserviceService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://api.sampleapis.com', // Set your API base URL
      timeout: 10000, // Set request timeout
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers here
      },
    });
  }

  // Example GET request
  async getData(endpoint: string) {
    let resp = await this.axiosInstance.get(endpoint).then((response) => {
      console.log(response.data);
      return response.data;
    })
      .catch((error) => {

        console.error('Error fetching data', error);
        throw error;
      });

      return resp;
  }
}
