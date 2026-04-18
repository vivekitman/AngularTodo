import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   newTodo = signal('');
   todos = signal<{ text: string; done: boolean }[]>([]);

    AddTodo() {
      const text = this.newTodo().trim();
      if (text=='') {return;}

      this.todos.update(todos => [...todos, { text, done: false }]);
      this.newTodo.set('');

    }
    ToggleTodo(index: number) {
      this.todos.update(list => 
        list.map((item, i) => i === index ? { ...item, done: !item.done } : item)
         
      )  ;
    }

    removeTodo(index: number) {
      this.todos.update(list => list.filter((_, i) => i !== index));
    }

}
