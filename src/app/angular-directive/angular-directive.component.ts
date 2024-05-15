import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-directive',
  templateUrl: './angular-directive.component.html',
  styleUrls: ['./angular-directive.component.css']
})
export class AngularDirectiveComponent implements OnInit {
username = 'Gizem MAZI';

isLoggedIn = !false; // ! işareti konulduğunda yanında yazılan değerin tam tersi olur yani !false yazılmışsa true değerini alır.
text = 'yapısal directivedir.';

bgColor = '#f4f263';
textColor = '#7012c6';

titleColor = '#17a08f';

  constructor() { }

  ngOnInit(): void {
  }

}
