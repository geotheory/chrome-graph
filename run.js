
if($(".custom-header-script").length == 0){ $(`
<script class="custom-header-script" type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script class="custom-header-script" type="text/javascript" src="https://unpkg.com/cytoscape/dist/cytoscape.min.js"></script>
`).appendTo('head');
}

$(`<script>

  const sleep = (milliseconds) => { return new Promise(resolve => setTimeout(resolve, milliseconds)) }

  sleep(1000).then(() => { alert("cytoscape is.. " + typeof(cytoscape)) })

  console.log("addon loaded");

</script>
`).appendTo('body');
