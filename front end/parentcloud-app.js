$(function() {
          var body = $('body')[0];
          body.width = $(window).width();
          body.height = $(window).height();
          var offsetX, offsetY;
        
          var square = $('.square');
        
          square.on('touchstart', function(e){
            setOffset(e);
            square.on('touchmove', drag);
            //square.off('mousedown');
          });
          
          square.on('touchend', function(e) {
            square.off('touchmove');
          });
          
          square.on('mousedown', function(e) {
            setOffset(e);
            square.on('mousemove', drag);
          });
        
          square.on('mouseup', function(e) {
             square.off('mousemove');
           });
          
          function getPos(e) {
            var coord = [];
            if (e.originalEvent.touches && e.originalEvent.touches.length) {
              coord[0] = e.originalEvent.touches[0].clientX;
                        } else
                        {
              coord[0] = e.clientX;
                        }
            return coord;
          }
          
          function setOffset(e) {
            var coord = getPos(e);
            offsetX = coord[0] - square.position().left;
          }
          
          function drag(e) {
            var coord = getPos(e);
            square.css('left', coord[0] - offsetX + 'px');
                        return false;        
          }
          
        });