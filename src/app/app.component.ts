import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sampleUI';

  img1: string = 'src/assets/images/img-1.jpg'
  img2: string = 'src/assets/images/img-2.jpg'
  img3: string = 'src/assets/images/img-3.jpg'
  img4: string = 'src/assets/images/img-4.jpg'
  img5: string = 'src/assets/images/img-5.jpg'
  img6: string = 'src/assets/images/img-6.jpg'
  img7: string = 'src/assets/images/img-7.jpg'
  img8: string = 'src/assets/images/img-8.jpg'
  img9: string = 'src/assets/images/img-9.jpg'

}


