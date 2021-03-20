export const condition = condition => {
  switch(condition) {
    case 'storm':
      return icon = {
        name: 'thunderstorm-outline',
        color: '#1EC9FF',
      };
    case 'clear_day':
      return icon = {
        name: 'sunny-outline',
        color: '#FFB300',
      };
    case 'clear_night':
      return icon = {
        name: 'moon-outline',
        color: '#1EC9FF',
      };
    case 'cloudly_day':
      return icon = {
        name: 'partly-sunny-outline',
        color: '#FFB300',
      };
    case 'cloud':
    case 'cloudly_night':
      return icon = {
        name: 'cloudy-night-outline',
        color: '#1EC9FF',
      };
    case 'rain':
    case 'hail':
      return icon = {
        name: 'rainy-outline',
        color: '#1EC9FF',
      };
    default:
      return icon = {
        name: 'alert-circle-outline',
        color: 'red',
      };
  }
};
