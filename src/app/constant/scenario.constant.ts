export const sc = [
    {
      "question": "How would you optimize change detection in a large Angular component?",
      "answer": "<p>Use OnPush change detection, immutable data structures, and pure pipes. Avoid calling functions directly in templates.</p><pre><code>@Component({ changeDetection: ChangeDetectionStrategy.OnPush })</code></pre>",
      "open": false
    },
    {
      "question": "How do you handle slow first load time in Angular?",
      "answer": "<p>Enable lazy loading, optimize bundle size, use differential loading, compress assets, and implement preloading strategies.</p><pre><code>ng build --configuration production</code></pre>",
      "open": false
    },
    {
      "question": "How would you implement advanced caching for API responses?",
      "answer": "<p>Create a caching service using RxJS shareReplay, and implement HTTP interceptors to manage cache expiration.</p><pre><code>return this.http.get(url).pipe(shareReplay(1));</code></pre>",
      "open": false
    },
    {
      "question": "How do you detect and prevent memory leaks?",
      "answer": "<p>Unsubscribe from Observables, use async pipe, avoid global event listeners, and track components with ngOnDestroy.</p>",
      "open": false
    },
    {
      "question": "How would you create a dynamic form with user-generated fields?",
      "answer": "<p>Use FormArray and generate controls dynamically based on configuration from API.</p><pre><code>this.formArray.push(new FormControl(''));</code></pre>",
      "open": false
    },
    {
      "question": "How do you handle permissions-based UI rendering?",
      "answer": "<p>Implement a role-based auth service and use structural directives to hide or show UI based on roles.</p><pre><code>*appHasRole=\"'admin'\"</code></pre>",
      "open": false
    },
  
    {
      "question": "7: How would you manage shared state across multiple modules?",
      "answer": "<p>Use NgRx store, or a shared service with BehaviorSubject for simpler apps.</p><pre><code>this.store.select(selectUser)</code></pre>",
      "open": false
    },
    {
      "question": "How do you optimize performance when listing thousands of items?",
      "answer": "<p>Use trackBy function, virtual scrolling (CDK), pagination, and OnPush change detection.</p>",
      "open": false
    },
    {
      "question": "How would you design a reusable table component?",
      "answer": "<p>Use content projection (ng-content), @Input decorators for columns, and Output events for sorting/filtering.</p>",
      "open": false
    },
    {
      "question": "How do you handle route-level preloading of critical data?",
      "answer": "<p>Use route resolvers to fetch data before activation.</p><pre><code>{ path: 'profile', resolve: { user: UserResolver } }</code></pre>",
      "open": false
    },
  
    {
      "question": "11: How do you create a multi-theme Angular application?",
      "answer": "<p>Use CSS variables and dynamically switch themes via a theme service.</p><pre><code>document.body.classList.toggle('dark');</code></pre>",
      "open": false
    },
  
    {
      "question": "12: How do you reduce unnecessary API calls?",
      "answer": "<p>Use route resolvers, shareReplay caching, take(1), or local storage syncing depending on the use case.</p>",
      "open": false
    },
  
    {
      "question": "13: How do you optimize a slow dashboard with multiple API calls?",
      "answer": "<p>Combine API calls using forkJoin and load widgets lazily.</p><pre><code>forkJoin([users$, orders$])</code></pre>",
      "open": false
    },
  
    {
      "question": "How do you prevent flicker during routing?",
      "answer": "<p>Use skeleton loaders or route transition animations.</p>",
      "open": false
    },
  
    {
      "question": "How do you detect changes for deeply nested objects?",
      "answer": "<p>Use immutable objects, spread operator, or changeDetectorRef.markForCheck().</p>",
      "open": false
    },
  
    {
      "question": "How would you implement WebSocket real-time updates?",
      "answer": "<p>Use RxJS WebSocketSubject to push real-time UI updates.</p>",
      "open": false
    },
  
    {
      "question": "How do you structure a large Angular monorepo?",
      "answer": "<p>Use Nx workspace with shared libraries, proper module separation, and CI/CD integration.</p>",
      "open": false
    },
  
    {
      "question": "How do you implement infinite scrolling?",
      "answer": "<p>Use the IntersectionObserver API or CDK virtual scroll to detect scroll end and load more data.</p>",
      "open": false
    },
  
    {
      "question": "How do you debug circular dependency issues?",
      "answer": "<p>Use ng build --verbose, inspect service injections, and break shared logic into separate modules.</p>",
      "open": false
    },
  
    {
      "question": "What is the best way to share enums and interfaces across modules?",
      "answer": "<p>Create a shared types library or a dedicated folder exported through public-api.ts.</p>",
      "open": false
    },
  
    {
      "question": "How do you preload only selected modules?",
      "answer": "<p>Create a custom PreloadingStrategy that loads only modules marked as preload: true.</p>",
      "open": false
    },
  
    {
      "question": "How do you handle long-running API operations?",
      "answer": "<p>Implement loaders, polling, RxJS retry strategies, or WebSockets for completion status.</p>",
      "open": false
    },
  
    {
      "question": "How do you improve form performance with many fields?",
      "answer": "<p>Break forms into subcomponents using OnPush and async validation batching.</p>",
      "open": false
    },
  
    {
      "question": "How do you detect and fix runtime change detection errors?",
      "answer": "<p>Search for mutating objects in templates, async timing issues, and use ngZone.runOutsideAngular when needed.</p>",
      "open": false
    },
  
    {
      "question": "How do you manage environment-specific configurations?",
      "answer": "<p>Use environment.ts files and pass runtime configs via APP_INITIALIZER.</p>",
      "open": false
    },
  
    {
      "question": "How do you create custom pipes efficiently?",
      "answer": "<p>Use pure pipes whenever possible to avoid unnecessary calculations.</p>",
      "open": false
    },
  
    {
      "question": "How do you protect admin routes?",
      "answer": "<p>Use canActivate guards, role-based permissions, and backend token validation.</p>",
      "open": false
    },
  
    {
      "question": "How do you implement complex modal dialogs?",
      "answer": "<p>Use Angular Material Dialog with strong typing and dependency injection for data passing.</p>",
      "open": false
    },
  
    {
      "question": "How do you manage component communication without EventEmitters?",
      "answer": "<p>Use shared services with Observables or a global state manager.</p>",
      "open": false
    },
  
    {
      "question": "How do you design a scalable folder structure?",
      "answer": "<p>Group by features, maintain a shared folder, and isolate core modules.</p>",
      "open": false
    },
  
    {
      "question": "How do you handle API versioning?",
      "answer": "<p>Implement versioned endpoints in services and use environment-based base URLs.</p>",
      "open": false
    },
  
    {
      "question": "How do you improve bundle caching?",
      "answer": "<p>Use hashed filenames, service workers, and disable accidental cache-breaking imports.</p>",
      "open": false
    },
  
    {
      "question": "How do you optimize Angular animations?",
      "answer": "<p>Use animation triggers, avoid heavy DOM animations, and limit transitions.</p>",
      "open": false
    },
  
    {
      "question": "How do you secure sensitive client-side data?",
      "answer": "<p>Move sensitive logic to backend, avoid localStorage for tokens, and use HttpOnly cookies.</p>",
      "open": false
    },
  
    {
      "question": "How do you improve Lighthouse performance score?",
      "answer": "<p>Optimize images, preload critical resources, minimize JS, and reduce render-blocking styles.</p>",
      "open": false
    },
  
    {
      "question": "How do you handle user session expiration?",
      "answer": "<p>Use interceptors to detect 401 responses, redirect to login, and implement refresh tokens.</p>",
      "open": false
    },
  
    {
      "question": "How do you create multilingual support?",
      "answer": "<p>Use Angular i18n or ngx-translate to dynamically load translation files.</p>",
      "open": false
    },
  
    {
      "question": "How do you prevent double form submissions?",
      "answer": "<p>Disable the submit button on first click and use RxJS exhaustMap in form submission.</p>",
      "open": false
    },
  
    {
      "question": "How do you optimize nested loops in templates?",
      "answer": "<p>Move calculations to pipes or component logic and use trackBy functions.</p>",
      "open": false
    },
  
    {
      "question": "How do you implement custom route reuse?",
      "answer": "<p>Implement RouteReuseStrategy to cache specific components like tabs and dashboards.</p>",
      "open": false
    },

    {
        "question": "How would you handle API error handling globally in an Angular app?",
        "answer": "<p>You can implement global error handling using an HttpInterceptor. This allows centralizing all HTTP error responses.</p><pre><code>intercept(req: HttpRequest<any>, next: HttpHandler) {\n  return next.handle(req).pipe(\n    catchError(err => {\n      console.error('Global Error:', err);\n      return throwError(() => err);\n    })\n  );\n}</code></pre>",
        "open": false
      },
      {
        "question": "How do you optimize performance when rendering large lists?",
        "answer": "<p>Use trackBy in ngFor to prevent Angular from re-rendering unchanged DOM elements.</p><pre><code>&lt;div *ngFor=\"let item of items; trackBy: trackByFn\"&gt;&lt;/div&gt;\ntrackByFn(index: number, item: any) { return item.id; }</code></pre>",
        "open": false
      },
      {
        "question": "How do you share data between unrelated components?",
        "answer": "<p>Use a shared service with RxJS Subjects/BehaviorSubjects for cross-component communication.</p><pre><code>data$ = new BehaviorSubject(null);\nupdate(val){ this.data$.next(val); }</code></pre>",
        "open": false
      },
      {
        "question": "How would you secure frontend routes based on user roles?",
        "answer": "<p>Implement RoleGuard that checks user permissions before activating routes.</p><pre><code>canActivate(){ return this.auth.role === 'admin'; }</code></pre>",
        "open": false
      },
      {
        "question": "How do you prevent unnecessary API calls when the user types in a search field?",
        "answer": "<p>Use RxJS debounceTime to delay requests until the user stops typing.</p><pre><code>fromEvent(input, 'keyup').pipe(\n  debounceTime(400),\n  switchMap(text => this.api.search(text))\n);</code></pre>",
        "open": false
      }
  ]
  