import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { SuperService } from 'src/app/service/super.service';

@Component({
  selector: 'app-new-comp-modal',
  templateUrl: './new-comp-modal.component.html',
  styleUrls: ['./new-comp-modal.component.css']
})
export class NewCompModalComponent implements OnInit {

  /// @Input() display?: String;
  @ViewChild('adminSelect') adminSelect?: ElementRef;
  @ViewChild('autofocus') autofocus?: ElementRef;

  @Output("refreshParent") refreshParent: EventEmitter<any> = new EventEmitter();
  displayStyle: String = "none";
  users?: any[];
  cName = '';
  cAdmin = '';
  error: string = '';

  constructor(private superService: SuperService, private authService: AuthService) { }

  ngOnInit() {
    this.superService.getUsers().subscribe(data => this.users = data);
  }

  openModal() {
  this.error='';
    this.displayStyle = "block";
    console.log(this.autofocus?.nativeElement);
    this.autofocus?.nativeElement.focus();
    this.autofocus!.nativeElement.setAttribute("autofocus");
 
    console.log(this.autofocus?.nativeElement);
  }

  closeModal(save: boolean) {

    this.cAdmin = this.adminSelect?.nativeElement.value;


    if (save) {

      if (this.authService.validate(this.cName) &&
        this.authService.validate(this.cAdmin)) {
        console.log("validated : " + this.cName + " " + this.cAdmin);
        this.superService.addCompetition(this.cName, this.cAdmin).subscribe({
          next: () => {
            this.refreshParent.emit();
            
               }
        });
      }
      else{
        this.error = 'Fill the form please:';
        return;
      }

    }
    this.displayStyle = "none";
    this.cAdmin = this.cName = '';
 
  }

}
