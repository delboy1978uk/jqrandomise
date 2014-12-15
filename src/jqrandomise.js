(function($) {
    $.fn.randomise = function(parent, child) 
    {
        return this.each(function() 
        {
            var $this = $(this);
            if (parent) $this = $(this).find(parent);
            var sort = $this.children(child);
            var nodes = sort.clone();
              
            nodes.sort(function() { return (Math.round(Math.random())-0.5); });  
        
            for(var x = 0; x < nodes.length; x++)
            {
                sort.eq(x).replaceWith(nodes[x]);
            }
        });    
      };    
})(jQuery);
