import { ChangeDetectorRef, Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

 @Directive({
    selector : '[onlyNumber]'
 })
 export class OnlyNumbersDirective {
    constructor(private elementRef: ElementRef, private renderer : Renderer2 ){}

    // @HostBinding('value') otp_digit : string = ''; 

    // @HostListener('input',['$event']) onchange(event : Event){
    //     let digit : any = (<HTMLInputElement>event.target).value

    //     if(digit)
    //         digit = +digit

    //     let flag = Number.isNaN(digit)

    //     if(flag){
    //         this.otp_digit = ''
    //         console.log('null value');
    //     }
            
    //     else{
    //         console.log(digit);
    //         this.otp_digit = digit
    //     }
        
    // }

    @HostListener('input',['$event']) oninput(event : Event){

        let digit : any = (<HTMLInputElement>event.target).value

        if(digit !== '')
            digit = +digit
        
        if(digit === '' || Number.isNaN(digit))
            this.renderer.setProperty(event.target,'value','')
        else{
            this.renderer.setProperty(event.target,'value',String(digit))
            let nextEle = (<HTMLInputElement>event.target).nextElementSibling

            if(nextEle instanceof HTMLInputElement)
                nextEle.focus()
        }
    }
 }