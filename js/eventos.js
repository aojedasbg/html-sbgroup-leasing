window.onload = function () {
    if (window.jQuery) {
        // jQuery is loaded 
        console.log("with jquery load");

        /*
         * Use without url event
         */
        /*
            $('form#contact_form').on('submit', function(){
                  if (typeof gtag == 'function') {
                      gtag('event', 'click', { 'event_category': 'formulario', 'event_label': 'contacto' });
                  };
                  if (typeof ga == 'function') {
                      ga('send','event', 'formulario', 'click', 'contacto');
                  };
                  if (typeof fbq == 'function') {
                      fbq('track','Lead', {content_name:'contacto'});
                  };
            });
        */

        /**
         * Asigna una clase en base al tipo de enlace
         */
        $('a[href^=tel]').addClass("link-phone");
        $('a[href^=mailto]').addClass("link-email").attr("target", "_blank");
        $('a[href*="wa.me"]').addClass("link-whatsapp").attr("target", "_blank");
        $('a[href*="api.whatsapp"]').addClass("link-whatsapp").attr("target", "_blank");
        $('a[href*="m.me"]').addClass("link-messenger").attr("target", "_blank");
        $('a[href*="maps.google"]').addClass("link-map").attr("target", "_blank");

        // Manejo de Eventos
        $('.link-phone').click(function () {
            if (typeof gtag == 'function') {
                gtag('event', 'click', { 'event_category': 'telefono', 'event_label': 'llamada' });
            };
            if (typeof ga == 'function') {
                ga('send', 'event', 'telefono', 'click', 'llamada');
            };
            if (typeof fbq == 'function') {
                fbq('track', 'Contact', { content_name: 'telefono' });
            };
        });

        $('.link-email').click(function () {
            if (typeof gtag == 'function') {
                gtag('event', 'click', { 'event_category': 'email', 'event_label': 'envio' });
            }
            if (typeof ga == 'function') {
                ga('send', 'event', 'email', 'click', 'envio');
            };
            if (typeof fbq == 'function') {
                fbq('track', 'Contact', { content_name: 'email' });
            };
        });

        $('.link-whatsapp').click(function () {
            if (typeof gtag == 'function') {
                gtag('event', 'click', { 'event_category': 'telefono', 'event_label': 'whatsapp' });
            }
            if (typeof ga == 'function') {
                ga('send', 'event', 'telefono', 'click', 'whatsapp');
            };
            if (typeof fbq == 'function') {
                fbq('track', 'Contact', { content_name: 'whatsapp' });
            };
        });

        $('.link-messenger').click(function () {
            if (typeof gtag == 'function') {
                gtag('event', 'click', { 'event_category': 'telefono', 'event_label': 'messenger' });
            }
            if (typeof ga == 'function') {
                ga('send', 'event', 'telefono', 'click', 'messenger');
            };
            if (typeof fbq == 'function') {
                fbq('track', 'Contact', { content_name: 'messenger' });
            };
        });


        $('.link-map').click(function () {
            if (typeof gtag == 'function') {
                gtag('event', 'click', { 'event_category': 'site', 'event_label': 'map' });
            }
            if (typeof ga == 'function') {
                ga('send', 'event', 'site', 'click', 'map');
            };
            if (typeof fbq == 'function') {
                fbq('track', 'Contact', { content_name: 'map' });
            };

        });
        
    } else {
        // jQuery is not loaded
        console.log("without jquery load");
        
        /**
         * Activacion e incrustación de clases para eventos
         */
        document.querySelectorAll('a[href^="tel"]').forEach(element => {
            element.classList.add("link-phone");
            element.addEventListener('click', function () {
                if (typeof gtag == 'function') {
                    gtag('event', 'click', { 'event_category': 'telefono', 'event_label': 'llamada' });
                };
                if (typeof ga == 'function') {
                    ga('send', 'event', 'telefono', 'click', 'llamada');
                };
                if (typeof fbq == 'function') {
                    fbq('track', 'Contact', { content_name: 'telefono' });
                };
            })
        });
        document.querySelectorAll('a[href^="mailto"]').forEach(element => {
            element.classList.add("link-email");
            element.setAttribute("target", "_blank");
            element.addEventListener('click', function () {
                if (typeof gtag == 'function') {
                    gtag('event', 'click', { 'event_category': 'email', 'event_label': 'envio' });
                };
                if (typeof ga == 'function') {
                    ga('send', 'event', 'email', 'click', 'envio');
                };
                if (typeof fbq == 'function') {
                    fbq('track', 'Contact', { content_name: 'email' });
                };
            });
        });
        document.querySelectorAll('a[href*="wa.me"]').forEach(element => {
            element.classList.add("link-whatsapp");
            element.setAttribute("target", "_blank");
            element.addEventListener('click', function () {
                if (typeof gtag == 'function') {
                    gtag('event', 'click', { 'event_category': 'whatsapp', 'event_label': 'envio' });
                };
                if (typeof ga == 'function') {
                    ga('send', 'event', 'whatsapp', 'click', 'envio');
                };
                if (typeof fbq == 'function') {
                    fbq('track', 'Contact', { content_name: 'whatsapp' });
                };
            });
        });
        document.querySelectorAll('a[href*="api.whatsapp"]').forEach(element => {
            element.classList.add("link-whatsapp");
            element.setAttribute("target", "_blank");
            element.addEventListener('click', function () {
                if (typeof gtag == 'function') {
                    gtag('event', 'click', { 'event_category': 'whatsapp', 'event_label': 'envio' });
                };
                if (typeof ga == 'function') {
                    ga('send', 'event', 'whatsapp', 'click', 'envio');
                };
                if (typeof fbq == 'function') {
                    fbq('track', 'Contact', { content_name: 'whatsapp' });
                };
            });
        });        
        document.querySelectorAll('a[href*="m.me"]').forEach(element => {
            element.classList.add("link-messenger");
            element.setAttribute("target", "_blank");
            element.addEventListener('click', function () {
                if (typeof gtag == 'function') {
                    gtag('event', 'click', { 'event_category': 'messenger', 'event_label': 'envio' });
                };
                if (typeof ga == 'function') {
                    ga('send', 'event', 'messenger', 'click', 'envio');
                };
                if (typeof fbq == 'function') {
                    fbq('track', 'Contact', { content_name: 'messenger' });
                };
            });
        });
        document.querySelectorAll('a[href*="maps.google"]').forEach(element => {
            element.classList.add("link-map");
            element.setAttribute("target", "_blank");
            element.addEventListener('click', function () {
                if (typeof gtag == 'function') {
                    gtag('event', 'click', { 'event_category': 'maps', 'event_label': 'envio' });
                };
                if (typeof ga == 'function') {
                    ga('send', 'event', 'maps', 'click', 'envio');
                };
                if (typeof fbq == 'function') {
                    fbq('track', 'Contact', { content_name: 'maps' });
                };
            });
        });


    }
}