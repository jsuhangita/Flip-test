
type Theme ={
  colors:{
    status_pending:string,
    status_success:string,
    container_background_color:string,
    text_primary:string,
    white:string,
  },
  padding:{
    small:number,
    normal:number,
    medium:number,
    large:number,
  },
  fontSize:{
    extra_small:number,
    small:number,
    normal:number,
    medium:number,
    large:number,
  }
}





const theme: Theme = {
  colors: {
    status_pending:'#EE6D4E',
    status_success:'#6FB388',
    container_background_color:"#F5FAF8",
    text_primary:"black",

    white:"white",
  },
  padding:{
    small:5,
    normal:13,
    medium:18,
    large:21
  },
  fontSize:{
    extra_small:7,
    small:10,
    normal:15,
    medium:17,
    large:23,
  }
};

export default theme
