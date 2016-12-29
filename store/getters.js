/**
 * Created by galen on 2016/12/29.
 */

export const threads = state => state.threads;

export const currentThread = state => {
  return state.currentThreadID ? state.threads[state.currentThreadID] : {};
};

export const currentMessage = state => {
  const thread = currentThread(state);
  return thread.messages ? thread.messages.map(id => state.messages[id]) : [];
};
