import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs-compat';
import 'rxjs-compat/add/observable/from';
import 'rxjs-compat/add/observable/empty';
import 'rxjs-compat/add/observable/throw';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('Should set Todos property with the items return from the server', () => {
    const todos = [1, 2, 3];
    spyOn(service, 'getTodos'). and.callFake(() => {
      return Observable.from([ todos ]);
    });

    component.ngOnInit();

    expect(component.todos).toBe(todos);
  });

  it('Should call the server to save the changes when a new Todo item is added.', () => {
   const spy = spyOn(service, 'add').and.callFake(t => {
      return Observable.empty();
    });
   component.add();

   expect(spy).toHaveBeenCalled();
});

  it('Should add the new todo returned from the server.', () => {
    const todo = { id: 1 };
    const spy = spyOn(service, 'add').and.returnValue(Observable.from([ todo ]));

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
});

  it('Should set the message property if server returns an error when adding new todo.', () => {
    const error = 'error from the server';
    const spy = spyOn(service, 'add').and.returnValue(Observable.throw(error));

    component.add();

    expect(component.message).toBe(error);
});

  it('Should call the server to delete a todo item if the user confirms.', () => {
  spyOn(window, 'confirm').and.returnValue(true);
  const spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

  component.delete(1);

  expect(spy).toHaveBeenCalledWith(1);
});

  it('Should NOT call the server to delete a todo item if the user cancels.', () => {
  spyOn(window, 'confirm').and.returnValue(false);
  const spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

  component.delete(1);

  expect(spy).not.toHaveBeenCalledWith(1);
});
});
