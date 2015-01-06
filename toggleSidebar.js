if (typeof sidebarOpen == 'undefined') {console.log("sidebar not set for this url pattern");}
  else { 
        if (!sidebarOpen) { //if closed
          $('html').animate({ "width": "-=" + width}, { //reduce width of main html doc
                            'duration': 'slow',
                            'easing': 'easeInOutCirc'
                        });

         $('.todo-sidebar').animate({ "right": "+=" + width}, { //reduce width of main html doc
                            'duration': 'slow',
                            'easing': 'easeInOutCirc'
                        });
          sidebarOpen = true;
          console.log("sidebar open");
        }

        else { //if open
          $('html').animate({ "width": "+=" + width}, { //increase width of main html doc
                            'duration': 'slow',
                            'easing': 'easeInOutCirc'
                        }); 
         $('.todo-sidebar').animate({ "right": "-=" + width}, { //reduce width of main html doc
                            'duration': 'slow',
                            'easing': 'easeInOutCirc'
                        });
          //document.getElementsByClassName('todo-sidebar')[0].remove();
          sidebarOpen = false;
          console.log("sidebar closed");
        }
      }