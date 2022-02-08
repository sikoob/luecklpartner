"use strict";

jQuery(document).ready(function($) {
    $(".contact__info").hide();
    $(".news__content").hide();

    $(".content__contact").hover(
        function() {
            $(".contact__info").show();
        },
        function() {
            $(".contact__info").hide();
        }
    );

    $(".content__news").hover(
        function() {
            $(".news__content").show();
        },
        function() {
            $(".news__content").hide();
        }
    );
});