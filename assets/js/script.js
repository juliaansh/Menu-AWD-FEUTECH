function openTab(evt, id) {
    $('.tm-tab-content').hide();
    $('#' + id).show();
    $('.tm-tab-link').removeClass('active');
    $(evt.currentTarget).addClass('active');
  }    

  function initPage() {
    let pageId = location.hash;

    if(pageId) {
      highlightMenu($(`.tm-page-link[href^="${pageId}"]`)); 
      showPage($(pageId));
    }
    else {
      pageId = $('.tm-page-link.active').attr('href');
      showPage($(pageId));
    }
  }

  function highlightMenu(menuItem) {
    $('.tm-page-link').removeClass('active');
    menuItem.addClass('active');
  }

  function showPage(page) {
    $('.tm-page-content').hide();
    page.show();
  }

  $(document).ready(function(){

    /***************** Pages *****************/

    initPage();

    $('.tm-page-link').click(function(event) {
      
      if(window.innerWidth > 991) {
        event.preventDefault();
      }

      highlightMenu($(event.currentTarget));
      showPage($(event.currentTarget.hash));
    });

    
    /***************** Tabs *******************/

    $('.tm-tab-link').on('click', e => {
      e.preventDefault(); 
      openTab(e, $(e.target).data('id'));
    });

    $('.tm-tab-link.active').click(); // Open default tab
  });