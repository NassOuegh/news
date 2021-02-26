import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = '93e8cd896e94470cbac0765149ee3ae9'; 
  constructor(private httpClient: HttpClient) { }

  getNews() {
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=93e8cd896e94470cbac0765149ee3ae9');
    //return this.httpClient.get("https://jsonplaceholder.typicode.com/posts");

  }
}
