$(document).ready(function () {
    var currentDate = $('#currentDay');
  
    function displayDate() {
      var date = dayjs().format('dddd MMM, DD YYYY');
      currentDate.text(date);
      var time = dayjs().format('hh:mm a');
      var timeDisplay = $('<p>');
      timeDisplay.text(time);
      currentDate.append(timeDisplay);
    }
    
    $('.saveBtn').click(function () {
      var taskText = $(this).siblings('.taskEntry').val().trim();
      var taskTime = $(this).parent().attr('id');
      localStorage.setItem(taskTime, taskText);
  
  
      console.log('save btn clicked');
      console.log(taskText, taskTime);
    });
  
  
    
  
    function timeColorChange() {
      var currentHour = dayjs().hour();
  
      $('.time-block').each(function () { 
        var taskTime = $(this).attr('id');
  
        if(taskTime == currentHour) {
          $(this).addClass('present');
        } else if (taskTime < currentHour) {
          $(this).addClass('past');
        } else {
          $(this).addClass('future');
        }
  
      console.log('current task hour for Color change: ', taskTime);
      }
      )
  
      console.log('currentHour for Color change: ', currentHour);
    }
  
    timeColorChange()

  //Displays the locally stored tasks in the text boxes.   
    $('#h7').text(localStorage.getItem('7'));
    $('#h8').text(localStorage.getItem('8'));
    $('#h9').text(localStorage.getItem('9'));
    $('#h10').text(localStorage.getItem('10'));
    $('#h11').text(localStorage.getItem('11'));
    $('#h12').text(localStorage.getItem('12'));
    $('#h13').text(localStorage.getItem('13'));
    $('#h14').text(localStorage.getItem('14'));
    $('#h15').text(localStorage.getItem('15'));
    $('#h16').text(localStorage.getItem('16'));
    $('#h17').text(localStorage.getItem('17'));
    $('#h18').text(localStorage.getItem('18'));
  
  
  
  
  
    displayDate();
    setInterval(displayDate, 1000);
  });
  
  
  