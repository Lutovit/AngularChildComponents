import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ViewportScroller } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/overlay';



@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.css',
 
})

export class SidePanelComponent
{
  public title : string = 'material-responsive-sidenav';
  public heightOfNavBar : number = 100;
  public arr : string[] = ["first_element", "second_element"]

  @ViewChild(MatSidenav)
  sidenav! : MatSidenav;  

  isCollapsed = true;
  isMobile= true;

  @ViewChild("content", {static: false})
  content : ElementRef | undefined;


  scrollingNativeElement : HTMLElement | null = null;
  public current_Y : number = 0;




  constructor(private observer: BreakpointObserver, private scroller : ViewportScroller, private scrollDispatcher: ScrollDispatcher) {}


  ngOnInit()
  {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => 
    {
      if(screenSize.matches)
      {
        this.isMobile = true;
      }
      else
      {
        this.isMobile = false;
      }
    });


    this.scrollDispatcher.scrolled().subscribe((data : any) => 
      {
        this.scrollingNativeElement = data.getElementRef().nativeElement;
        this.current_Y = data.getElementRef().nativeElement.scrollTop;
        console.log(this.current_Y);
      
      
        
      });
  }


  toggleMenu()
  {
    if(this.isMobile)
    {
      this.sidenav.toggle();
      this.isCollapsed = false; // On mobile, the menu can never be collapsed
    }
    else 
    {
      this.sidenav.open(); // On desktop/tablet, the menu can never be fully closed
      this.isCollapsed = !this.isCollapsed;
    }
  }



  scrollToneededElement(id : string):void
  {

    let element = document.getElementById(id);
    console.log(element);  

    
    let rect = element?.getBoundingClientRect();
    console.log(rect);

    let curPos : [number, number] = this.scroller.getScrollPosition();
    console.log(curPos);  

    if(rect == null || rect == undefined) return;

    //this.scroller.scrollToPosition([rect?.left, rect?.top + curPos[1] - this.heightOfNavBar]);

  
    //element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
 
 
    if(this.content != null)
    {
      this.scrollDispatcher.scrolled().subscribe((data : any) => 
      {
        this.current_Y = data.getElementRef().nativeElement.scrollTop;
        console.log(this.current_Y);
      
      
        
      });
    }


    //this.scroller.scrollToPosition([rect?.left, rect?.top + this.current_Y - this.heightOfNavBar]); 

    this.scrollingNativeElement?.scrollTo(rect?.left, rect?.top + this.current_Y - this.heightOfNavBar)

  }



}