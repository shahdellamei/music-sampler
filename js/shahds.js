
$(document).ready(function(){
    
    // function to hide all divs 
    function hideAll() {
        $('#firstsoundtrack').hide();
        $('#secondsoundtrack').hide();
        $('#thirdsoundtrack').hide();
        $('#fourthsoundtrack').hide();
    }
    hideAll();
    
    $('.bigsean').click(function() {
       
        hideAll();
                 
        switch ( $(this).attr("id") ) {
            case "dark" :
                $('#firstsoundtrack').show();
                break;
            case "fame" :
                $('#secondsoundtrack').show();
                break;
            case "famous" :
                $('#thirdsoundtrack').show();
                break;
            case "seemenow" :
                $('#fourthsoundtrack').show();
                break;
        }
    });  // end of function for clicking 

    });
