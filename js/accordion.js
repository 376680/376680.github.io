(function ($) {
  // Function to initialize accordion functionality
  function initializeAccordion() {
    // Seems to be a bug in ckeditor5 using buttons and maintaining text
    // See https://github.com/ckeditor/ckeditor5/issues/13268
    $('.text-formatted div.usa-accordion__button').each(function () {
      const outer = this.outerHTML;

      // Replace opening tag
      let regex = new RegExp(`<${this.tagName}`, 'i');
      let newTag = outer.replace(regex, '<button');

      // Replace closing tag
      regex = new RegExp(`</${this.tagName}`, 'i');
      newTag = newTag.replace(regex, '</button');

      $(this).replaceWith(newTag);
    });

    let $containerCounter = 0;
    $('main .text-formatted .usa-accordion, .usa-banner .usa-accordion').each(function () {
      let $itemCounter = 0;
      $('.usa-accordion__button', this).each(function () {
        if (!$(this).attr('aria-controls')) {
          $(this).attr('aria-controls', `${$containerCounter}-${$itemCounter}`);
          $itemCounter++;
        }
      });

      $itemCounter = 0;
      $('.usa-accordion__content', this).each(function () {
        if (!$(this).attr('id')) {
          $(this).attr('id', `${$containerCounter}-${$itemCounter}`);
          $itemCounter++;
        }
      });

      $containerCounter++;
    });

    // Add click event handlers for accordion buttons
    $('.usa-accordion__button').on('click', function () {
      const button = $(this);
      const expanded = button.attr('aria-expanded') === 'true';
      const contentId = button.attr('aria-controls');
      const content = $('#' + contentId);

      // Toggle expanded state
      button.attr('aria-expanded', !expanded);
      
      // Toggle content visibility
      if (expanded) {
        content.slideUp();
      } else {
        content.slideDown();
      }
    });
  }

  // Initialize accordion when document is ready
  $(document).ready(function () {
    initializeAccordion();
    
    // Set all accordion content to be collapsed by default
    $('.usa-accordion__button').each(function () {
      const button = $(this);
      const expanded = button.attr('aria-expanded') === 'true';
      const contentId = button.attr('aria-controls');
      const content = $('#' + contentId);
      
      if (!expanded) {
        content.hide();
      }
    });
  });
})(jQuery);
