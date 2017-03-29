var taskVariables = {
  x: 0,
  y: 0,
  z: 0,
};

$(document).ready(function() {
  generateTask();
  renderTask();
  bindEvents();
});

function bindEvents() {
  var $inputFirst = $('.first');
  var $inputSecond = $('.second');
  $inputSecond.hide();
  var $inputThird = $('.third');
  $inputThird.hide();
  $('.task > div:nth-child(5)').html('??');
  
  function doSmth(x, y) {
    var $div = $('.task > div:nth-child(3)'); 
    $(this).css('background-color', '');
    $div.css('color', 'black');
	
    var val = parseInt($(this).val(), 10);
    if (taskVariables.y !== val) {
      $(this).css('background-color', 'red');
      $div.css('color', 'yellow');
    } else {
      step3();
    }	  
  }
  
  $inputFirst.keyup(function() {
	doSmth();
  });

  $inputSecond.change(function() {
    var $div = $('.task > div:nth-child(3)'); 
    $(this).css('background-color', '');
    $div.css('color', 'black');
	
    var val = parseInt($(this).val(), 10);
    if (taskVariables.y !== val) {
      $(this).css('background-color', 'red');
      $div.css('color', 'yellow');
    } else {
      step3();
    }
  });
  
    $inputThird.change(function() {
    $(this).css('background-color', '');
    $('.task > div:nth-child(5)').css('color', 'black');
	$('.task > div:nth-child(5)').text(taskVariables.z).show();
	
    var val = parseInt($(this).val(), 10);
    if (taskVariables.z !== val) {
      $(this).css('background-color', 'red');
      $('.task > div:nth-child(5)').css('color', 'yellow');
    } else {
		step4();
	}
  });
}

function step2() {
  $('.first').hide();
  $('.input-first-container .text').text(taskVariables.x);
  $('.second').show();
  
		if (taskVariables.z == 11) {
            var line = document.getElementById("myCanvas");
            var context = line.getContext("2d");
            context.strokeStyle = "green";
            context.moveTo(35, 10);
            context.lineTo(466, 10);
			context.lineTo(466, 2);
            context.stroke();
        }

        if (taskVariables.z == 12) {
            var line = document.getElementById("myCanvas");
            var context = line.getContext("2d");
            context.strokeStyle = "green";
            context.moveTo(35, 10);
            context.lineTo(505, 10);
			context.lineTo(505, 2);
            context.stroke();
        }

        if (taskVariables.z == 13) {
            var line = document.getElementById("myCanvas");
            var context = line.getContext("2d");
            context.strokeStyle = "green";
            context.moveTo(35, 10);
            context.lineTo(544, 10);
			context.lineTo(544, 2);
            context.stroke();
        }

        if (taskVariables.z == 14) {
            var line = document.getElementById("myCanvas");
            var context = line.getContext("2d");
            context.strokeStyle = "green";
            context.moveTo(35, 10);
            context.lineTo(582, 10);
			context.lineTo(582, 2);
            context.stroke();
        }
		
		switch(taskVariables.z) {
		  case 11:
			drawLine(466);
			break;
		  case 12:
			drawLine(505);
			break;
		}
}

function drawLine(xCoord) {
            var line = document.getElementById("myCanvas");
            var context = line.getContext("2d");
            context.strokeStyle = "green";
            context.moveTo(35, 10);
            context.lineTo(582, 10);
			context.lineTo(xCoord, 2);
            context.stroke();
}


function step3() {
  $('.second').hide();
  $('.input-second-container .text').text(taskVariables.y);
  $('.task > div:nth-child(5)').html('??').hide();
  $('.third').show();
}

function step4() { 
  $('.third').hide();
}

function generateTask() {
  taskVariables.x = randomInteger(6, 9);
  taskVariables.z = randomInteger(11, 14);
  taskVariables.y = taskVariables.z - taskVariables.x;
  
		if (taskVariables.x == 6) {
            var line = document.getElementById("myCanvas");
            var context = line.getContext("2d");
            context.strokeStyle = "green";
            context.moveTo(35, 10);
            context.lineTo(270, 10);
            context.lineTo(270, 2);
            context.stroke();
        }
		if (taskVariables.x == 7) {
            var line = document.getElementById("myCanvas");
            var context = line.getContext("2d");
            context.strokeStyle = "green";
            context.moveTo(35, 10);
            context.lineTo(308, 10);
            context.lineTo(308, 2);
            context.stroke();
        }

		if (taskVariables.x == 8) {
            var line = document.getElementById("myCanvas");
            var context = line.getContext("2d");
            context.strokeStyle = "green";
            context.moveTo(35, 10);
            context.lineTo(348, 10);
            context.lineTo(348, 2);
            context.stroke();
        }

		if (taskVariables.x == 9) {
            var line = document.getElementById("myCanvas");
            var context = line.getContext("2d");
            context.strokeStyle = "green";
            context.moveTo(35, 10);
            context.lineTo(387, 10);
            context.lineTo(387, 2);
            context.stroke();
        }
}

function renderTask() {
  var array = getTaskArray();
  for(var i = 0; i < array.length; i++) {
    var text = array[i];
    var $div = $('<div>', {
      'class': 'task-block',
    });
    $div.text(text);
    $('.task').append($div);
	
  }
}

function getTaskArray() {
  var array = [taskVariables.x, '+', taskVariables.y, '=', taskVariables.z];

  return array;
}

function randomInteger(min, max) {
  var a = min + Math.random() * (max + 1 - min);
  a = Math.floor(a);
  return a;
}


