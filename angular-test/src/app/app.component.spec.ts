import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  //lo correcto es declarar variables de describe de cada test en el before
  let fixture;
  let app;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    //nativeElement hace referencia al selector de las clases ts
    compiled = fixture.debugElement.nativeElement;
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-test'`, () => {
    expect(app.title).toEqual('angular-test');
  });

  it('should render title', () => {
    //detectChanges genera el binding entre el ts del componente y el template
    fixture.detectChanges();

    // con compiled.querySelector buscamos dentro del selector del dom la clase expecificada
    //y repuperamos el contenido con .toContain
    expect(compiled.querySelector('.app-title-span').textContent).toContain('angular-test');

    //podemos comparar tambien con Equals
    expect(compiled.querySelector('.app-title-span').textContent).toEqual('angular-test');

    //podemos declarar variables para comparar
    var spanTitle = compiled.querySelector('.app-title-span').textContent;
    expect(spanTitle).toContain('angular');

    //podemos modificar el valor de las variable y volver a probar
    app.title = 'another title';
    fixture.detectChanges();//debemos volver a detectar los cambios
    spanTitle = compiled.querySelector('.app-title-span').textContent;
    expect(spanTitle).toEqual('another title');

    //incluso definir una funcion
    const spanTitleFunc = () => compiled.querySelector('.app-title-span').textContent;
    app.title = 'another two title';
    fixture.detectChanges();
    expect(spanTitleFunc()).toEqual('another two title');

    app.title = 'another three title';
    fixture.detectChanges();
    expect(spanTitleFunc()).toEqual('another three title');
  });
});
