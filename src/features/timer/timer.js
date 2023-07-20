export class Stop {
  stop(timer) {
    void 0
  }
  start(timer) {
    timer.base_time = Date.now()
    timer.state = new Running()
  }
  lap(timer) {
    void 0
  }
  now(timer) {
    return timer.total_time
  }
}

export class Running {
  stop(timer) {
    const t_end = Date.now()
    const elapsed_time = t_end - timer.base_time
    // timer.total_time 最後に停止したときまでの経過時間
    timer.total_time += elapsed_time
    timer.state = new Stop()
  }
  start(timer) {
    void 0
  }
  lap(timer) {
    timer.n_lap += 1
    // current_abs_time 現在時刻
    const current_abs_time = Date.now()
    // timer.base_time 最後にスタートしたときの時刻
    const elapsed_time = current_abs_time - timer.base_time
    // timer.total_time 最後にスタートしたときの経過時間
    const current_rel_time = timer.total_time + elapsed_time
    // current_rel_time 最後にラップを打ったときの経過時間
    // timer.lap_time ひとつ前にラップを打った時の経過時間
    const lap_time = current_rel_time - timer.lap_time
    // timer.lap_time 最後のラップ打った時の経過時間に変更
    timer.lap_time = current_rel_time
    return { lap: timer.n_lap, interval: lap_time, total_time: timer.lap_time }
  }
  now(timer) {
    const current_abs_time = Date.now()
    const total_time = timer.total_time + current_abs_time - timer.base_time
    return total_time
  }
}

class Timer {
  constructor() {
    this.state = new Stop()
    this.n_lap = 0
    this.lap_time = 0
    this.total_time = 0
    this.base_time = 0
  }
  stop() {
    this.state.stop(this)
  }
  start() {
    this.state.start(this)
  }
  reset() {
    this.state = new Stop()
    this.n_lap = 0
    this.lap_time = 0
    this.total_time = 0
    this.base_time = 0
  }
  lap() {
    return this.state.lap(this)
  }
  now() {
    return this.state.now(this)
  }
}

export default Timer
