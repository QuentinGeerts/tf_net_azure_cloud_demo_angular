import { Directive, ElementRef, HostBinding, HostListener, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit, OnDestroy {

  @Input() appHighlight: string = "16px";
  @Input() defaultColor: string = "yellow";
  
  @Input() defaultMaxSize: string = "20px";

  constructor(private el: ElementRef) {}

  // Permet de définir la valeur d'une propriété sur les hôtes de la directive
  @HostBinding('class') 
  private classElement!: string; // definite assignment assertion
  
  // Hook
  // Parfait pour l'initialisation des propriétés
  ngOnInit (): void {
    this.el.nativeElement.style.backgroundColor = this.defaultColor;
    this.el.nativeElement.style.fontSize = this.appHighlight;

    this.classElement = "underline";
  }

  // Parfait pour le nettoyage de données
  ngOnDestroy (): void {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.fontSize = this.defaultMaxSize;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.fontSize = this.appHighlight;
  }
  
}
