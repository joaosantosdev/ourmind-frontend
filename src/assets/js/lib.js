
(function(){

    $(document).on('click','.link',function(){

        const ref = $(this)
        const linkId = ref.data('link-id')
        const linkCLass = ref.data('link-class')
        console.log(ref,linkCLass,linkId)
        const links = $.find('*[data-link-id="'+linkId+'"]')

        links.map(item=>{
            $(item).removeClass(linkCLass);
        })
        ref.addClass(linkCLass);
    })

})()