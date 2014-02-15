joyride
=======

joyride incorrectly applies modal



Using Firefox 26, when I click on the joyride trigger once, joyride starts up and will behave normally. However, if I click on the trigger to start joyride, then click on that same trigger again, the modal effect is activated, and joyride will stay in modal mode until I get to "END". I am currently circumventing this problem by setting the screenfill to transparent, like so: $joyride-screenfill: rgba(0,0,0,0);

My trigger is an anchor tag, and I have changed it to a div and paragraph, and still the same modal effect happens. Foundation docs do not seem to mention this as an intended function.
