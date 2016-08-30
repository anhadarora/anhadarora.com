$(document).ready(function() {
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                $('#signup-form').on('submit', function(e) {
                    if(re.test($('#email').val())) {
                        Parse.$ = jQuery;
                        Parse.initialize("n7cfi9v9FErlM13bSC4qb6obHr0c9lSNmEgyBGTB", "NHA6CciUx6xXCvrQwHGTG48D7ggItvUlrYE36mTT");

                        var SignupList = Parse.Object.extend("signup_list");
                        var signup = new SignupList();
                        signup.save({email: $('#email').val()}).then(function(object) {
                            // alert($('#email').val());
                            $('.alert').removeClass('alert-danger').addClass('alert-success')
                        .show().text('You\'re Awesome.!!').delay(1000).fadeOut();
                        });
                    } else {
                        $('.alert').removeClass('alert-success').addClass('alert-danger')
                        .show().text('That doesn\'t look right').delay(1000).fadeOut();
                    }
                    e.preventDefault();
                });
            });