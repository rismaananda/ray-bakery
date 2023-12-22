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
        "breadName": "White Bread",
        "breadImg": "../../../assets/img/white.jpg",
        "breadDesc": "White bread is a soft and fluffy bread that is commonly used for making sandwiches or toasted as toast.",
        "breadPrc": 10000
      },
      {
        "id": 2,
        "breadName": "Croissant",
        "breadImg": "../../../assets/img/bread.jpg",
        "breadDesc": "Croissant is a crescent-shaped bread made from flour, butter, and yeast. This bread has a crispy texture on the outside and a soft interior.",
        "breadPrc": 15000
      },
      {
        "id": 3,
        "breadName": "Donut",
        "breadImg": "../../../assets/img/donut.jpg",
        "breadDesc": "Donut is a ring-shaped bread with a hole in the center. This bread is usually fried and decorated with sugar or cream.",
        "breadPrc": 5000
      },
      {
        "id": 4,
        "breadName": "Brownies",
        "breadImg": "../../../assets/img/brownies.jpg",
        "breadDesc": "Cake is a type of bread made from flour, eggs, sugar, and butter. This bread usually has a soft texture and is often decorated with cream or jam.",
        "breadPrc": 12000
      },
      {
        "id": 5,
        "breadName": "Torn Bread",
        "breadImg": "../../../assets/img/bread.jpg",
        "breadDesc": "Torn bread is a bread with a rough surface and is often cut into small pieces. This bread is suitable for dipping in sauce or spreads.",
        "breadPrc": 8000
      }
  ]
}
 