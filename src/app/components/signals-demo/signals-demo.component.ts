import { Component, computed, effect, signal, untracked } from '@angular/core';

@Component({
  selector: 'app-signals-demo',
  templateUrl: './signals-demo.component.html',
  styleUrls: ['./signals-demo.component.css']
})
export class SignalsDemoComponent {
  count = signal(0);
  computedCount = computed(() => this.count() * 2);

  todos = signal([] as { text: string; done: boolean }[]);

  constructor() {
    // Register a new effect.
    effect(() => {
      // all the variables used in here will be tracked, if you don t want to track them
      // you should use untracked(counter)
      console.log(`The count is: ${this.count()})`);
      //console.log(`The count is: ${this.count()}), todos: ${this.todos()}`);
      // console.log(`The count is: ${this.count()}), todos: ${untracked(() => {
      //   return this.todos().map(todo => todo.text).join(', ');
      // })}`);
    });
  }

  increment() {
    this.count.update(count => count + 1);
  }

  reset() {
    this.count.set(0);
  }

  decrement() {
    this.count.update(count => count - 1);
  }

  // if the signal contains an object, you can mutate it directly
  addTodo() {
    this.todos.mutate(todos => todos.push({ text: 'New todo', done: false }));
  }
}
