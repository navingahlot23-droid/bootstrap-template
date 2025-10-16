const images = import.meta.glob('../assets/portfolio-*.{jpg,png,svg}', {eager : true});
export default images;