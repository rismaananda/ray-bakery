import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // bread Data
  breadData = [
  
      {
        "id": 1,
        "breadName": "Roti Tawar",
        "breadImg": "../../../assets/img/bread.jpg",
        "breadDesc": "Roti tawar adalah roti yang lembut dan empuk yang biasanya digunakan untuk membuat sandwich atau dipanggang menjadi roti panggang.",
        "breadPrc": 10000
      },
      {
        "id": 2,
        "breadName": "Croissant",
        "breadImg": "../../../assets/img/bread.jpg",
        "breadDesc": "Croissant adalah roti berbentuk bulan sabit yang terbuat dari adonan tepung, mentega, dan ragi. Roti ini memiliki tekstur renyah di luar dan lembut di dalam.",
        "breadPrc": 15000
      },
      {
        "id": 3,
        "breadName": "Donat",
        "breadImg": "../../../assets/img/bread.jpg",
        "breadDesc": "Donat adalah roti yang berbentuk cincin dengan lubang di tengahnya. Roti ini biasanya digoreng dan diberi hiasan seperti gula donat atau krim.",
        "breadPrc": 5000
      },
      {
        "id": 4,
        "breadName": "Bolu",
        "breadImg": "../../../assets/img/bread.jpg",
        "breadDesc": "Bolu adalah jenis roti yang terbuat dari adonan tepung, telur, gula, dan mentega. Roti ini biasanya memiliki tekstur lembut dan sering diberi hiasan seperti krim atau selai.",
        "breadPrc": 12000
      },
      {
        "id": 5,
        "breadName": "Roti Sobek",
        "breadImg": "../../../assets/img/bread.jpg",
        "breadDesc": "Roti sobek adalah roti yang memiliki permukaan yang kasar dan sering dipotong-potong menjadi bagian-bagian kecil. Roti ini cocok untuk disantap dengan saus atau dip.",
        "breadPrc": 8000
      }
    
  ]
}
 