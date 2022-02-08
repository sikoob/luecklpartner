"use strict";

jQuery(document).ready(function($) {
    $(".contact__info").hide();
    $(".news__content").hide();
    $(".image__architecture").hide();
    $(".image__design").hide();
    $(".image__light").hide();
    $(".image__gastro").hide();

    $(".whole_page").hover(
        function() {
            $(".contact__info").hide();
            $(".news__content").hide();
            $(".image__architecture").hide();
            $(".image__design").hide();
            $(".image__light").hide();
            $(".image__gastro").hide();
        }
    );

    $(".content__contact").hover(
        function() {
            $(".news__content").hide();
            $(".contact__info").show();
        }
    );

    $(".content__news").hover(
        function() {
            $(".contact__info").hide();
            $(".news__content").show();
        }
    );

    $(".content__architecutre").hover(
        function() {
            $(".image__design").hide();
            $(".image__light").hide();
            $(".image__gastro").hide();
            $(".image__architecture").show();
        }
    );

    $(".content__design").hover(
        function() {
            $(".image__architecture").hide();
            $(".image__light").hide();
            $(".image__gastro").hide();
            $(".image__design").show();
        }
    );

    $(".content__light").hover(
        function() {
            $(".image__architecture").hide();
            $(".image__design").hide();
            $(".image__gastro").hide();
            $(".image__light").show();
        }
    );

    $(".content__gastro").hover(
        function() {
            $(".image__architecture").hide();
            $(".image__design").hide();
            $(".image__light").hide();
            $(".image__gastro").show();
        }
    );
});