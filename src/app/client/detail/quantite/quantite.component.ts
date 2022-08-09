import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quantite',
  templateUrl: './quantite.component.html',
  styleUrls: ['./quantite.component.css']
})
export class QuantiteComponent implements OnInit {
  @Output() quantite: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  nombre: number = 0
  quantitepositif(event: any) {
    this.nombre = event.target.value
    alert(event.target.value)
    this.quantite.emit("")
  }

  @Input() size!: number | string;
  @Input() maxe!: any|undefined;
  @Output() sizeChange = new EventEmitter<number>();
  @Output() onYelle = new EventEmitter;


  dec(e: any) { this.resize(-1, e); }
  inc(e: any) {
    this.resize(+1, e);
    if (this.size > this.maxe) {
      alert("vous ne pouvais pas choissir plus de " +this.maxe)
      this.size = this.maxe;
      
    }
  }
  resize(delta: number, e: any) {
    this.size = Math.min(100000, Math.max(1, +this.size + delta));
    this.sizeChange.emit(this.size);
    this.onYelle.emit(this.size)

  }

}
