import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements AfterViewInit {

  @ViewChild('map') divMap?: ElementRef;

  @Input() lngLat?: [number, number];

  ngAfterViewInit(): void {

    if (!this.divMap) {
      throw 'Error al cargar el mapa';
    }

    if (!this.lngLat) {
      throw 'No se encontraron las coordenadas';
    }

    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive: false
    });

    new Marker()
      .setLngLat(this.lngLat)
      .addTo(map);
  }


}
