<script type="text/javascript">
    var tabCAS=["&","#","§","*","$","€","£","%"];
    $(function() {
      var cnt = 10; 
      TabbedNotification = function(options) {
        var message = "<div id='ntf" + cnt + "' class='text alert-" + options.type + "' style='display:none'><h2><i class='fa fa-bell'></i> " + options.title +
          "</h2><div class='close'><a href='javascript:;' class='notification_close'><i class='fa fa-close'></i></a></div><p>" + options.text + "</p></div>";

        if (document.getElementById('custom_notifications') == null) {
          alert('doesnt exists');
        } else {
          $('#custom_notifications ul.notifications').append("<li><a id='ntlink" + cnt + "' class='alert-" + options.type + "' href='#ntf" + cnt + "'><i class='fa fa-bell animated shake'></i></a></li>");
          $('#custom_notifications #notif-group').append(message);
          cnt++;
          CustomTabs(options);
        }
      }

      CustomTabs = function(options) {
        $('.tabbed_notifications > div').hide();
        $('.tabbed_notifications > div:first-of-type').show();
        $('#custom_notifications').removeClass('dsp_none');
        $('.notifications a').click(function(e) {
          e.preventDefault();
          var $this = $(this),
            tabbed_notifications = '#' + $this.parents('.notifications').data('tabbed_notifications'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
          others.removeClass('active');
          $this.addClass('active');
          $(tabbed_notifications).children('div').hide();
          $(target).show();
        });
      }

      CustomTabs();

      var tabid = idname = '';
      $(document).on('click', '.notification_close', function(e) {
        idname = $(this).parent().parent().attr("id");
        tabid = idname.substr(-2);
        $('#ntf' + tabid).remove();
        $('#ntlink' + tabid).parent().remove();
        $('.notifications a').first().addClass('active');
        $('#notif-group div').first().css('display', 'block');
      });
    })
  function controlVide(form){
    var inp = form.id;
    if(document.getElementById(inp).value==""){
      new TabbedNotification({title: 'Erreur!',text: 'Le champ '+inp+' est obligatoire.',type: 'error'});
    }
    if(inp=="submitlogin"){
      new TabbedNotification({title: 'Attention', text: 'Les champs avec un * sont obligatoires', type: 'warning'});
    }
  }
  function controlTaille(form){
    var inp=form.id;
    if(document.getElementById(inp).value.length>0 && document.getElementById(inp).value.length<2){
      new TabbedNotification({title: 'Notice', text: 'Le champ '+inp+' contient au moins 5 charact&egrave;s.',type:'info'});
    }
    if(inp=="identifiant" && document.getElementById(inp).value.length<5){
      document.getElementById("mots-de-passe").disabled=true;
    }
    if(inp=="identifiant" && document.getElementById(inp).value.length>4){
      document.getElementById("mots-de-passe").disabled=false;
    }
  }
</script>