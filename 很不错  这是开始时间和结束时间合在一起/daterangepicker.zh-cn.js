/**
 * Fork and modified from https://github.com/GumpChan/yii2-daterangepicker
 * Simplified Chinese translation for daterangepicker
 * IOriens <IOreins@gmail.com>
 */
;
(function ($) {
    $.fn.cnDateRangePicker =  function (options, cb) {
        var defaults = {
            locale: {
                applyLabel: '确认',
                cancelLabel: '取消',
                fromLabel: '从',
                toLabel: '到',
                customRangeLabel: '自选',
                daysOfWeek: ['日', '一', '二', '三', '四', '五','六'],
                monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                firstDay: 1
            }
        }
        var newOptions = $.extend(true, {}, defaults, options)
        return this.each(function () {
           $(this).daterangepicker(newOptions,cb)
        })
    };
}(jQuery));