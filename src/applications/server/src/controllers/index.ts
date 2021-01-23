import metrics from './metrics';
import rooms from './rooms';
import health from './health';
import stats from './stats';

export default [...rooms, ...metrics, ...health, ...stats];
