
export default function lifeStatus(object) {
  let status = '';
  const {health} = object;
  if (health < 15) {
    status = 'critical'; 
  } else if (health >= 15 && health <= 50) {
    status = 'wounded';
  } else {
    status = 'healthy';
  }
  return status;
}