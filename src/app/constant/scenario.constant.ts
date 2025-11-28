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
      "question": "How would you manage shared state across multiple modules?",
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
      "question": "How do you create a multi-theme Angular application?",
      "answer": "<p>Use CSS variables and dynamically switch themes via a theme service.</p><pre><code>document.body.classList.toggle('dark');</code></pre>",
      "open": false
    },
  
    {
      "question": "How do you reduce unnecessary API calls?",
      "answer": "<p>Use route resolvers, shareReplay caching, take(1), or local storage syncing depending on the use case.</p>",
      "open": false
    },
  
    {
      "question": "How do you optimize a slow dashboard with multiple API calls?",
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
      },
      {
        "question": "How do you implement lazy loading for feature modules?",
        "answer": "<p>Use loadChildren in your route configuration to load modules on demand.</p><pre><code>{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }</code></pre>",
        "open": false
      },
      {
        "question": "How do you implement route resolvers to fetch data before navigation?",
        "answer": "<p>Create a resolver service that implements Resolve and configure it in the route.</p><pre><code>resolve: { data: DataResolver }</code></pre>",
        "open": false
      },
      {
        "question": "How would you manage form state for a large reactive form?",
        "answer": "<p>Break the form into FormGroups, use nested FormArrays, and leverage custom validators.</p>",
        "open": false
      },
      {
        "question": "How do you implement a shared module for commonly used components and pipes?",
        "answer": "<p>Create a SharedModule and export all reusable components/pipes so other modules can import them.</p>",
        "open": false
      },
      {
        "question": "How do you improve the performance of a dashboard with multiple API calls?",
        "answer": "<p>Use forkJoin to combine parallel requests, lazy load widgets, and cache results.</p><pre><code>forkJoin([users$, orders$]).subscribe();</code></pre>",
        "open": false
      },
      {
        "question": "How do you implement a dynamic component loader?",
        "answer": "<p>Use ViewContainerRef and ComponentFactoryResolver to load components at runtime.</p>",
        "open": false
      },
      {
        "question": "How do you handle unsubscribing from multiple Observables to avoid memory leaks?",
        "answer": "<p>Use the takeUntil pattern with a Subject or use async pipe in templates.</p><pre><code>destroy$ = new Subject(); observable$.pipe(takeUntil(destroy$)).subscribe();</code></pre>",
        "open": false
      },
      {
        "question": "How would you implement internationalization (i18n) in an Angular app?",
        "answer": "<p>Use Angular i18n or ngx-translate to provide translation files and dynamically switch languages.</p>",
        "open": false
      },
      {
        "question": "How do you optimize bundle size in Angular?",
        "answer": "<p>Enable production build, lazy loading, tree-shaking, and remove unused dependencies.</p><pre><code>ng build --prod</code></pre>",
        "open": false
      },
      {
        "question": "How do you implement an authentication flow using JWT?",
        "answer": "<p>Store JWT in HttpOnly cookies, use AuthInterceptor to attach token, and guard routes using canActivate.</p>",
        "open": false
      },
      {
        "question": "How do you prevent flickering of components when navigating between routes?",
        "answer": "<p>Use skeleton screens, route transition animations, or cache components with RouteReuseStrategy.</p>",
        "open": false
      },
      {
        "question": "How would you implement a real-time chat in Angular?",
        "answer": "<p>Use WebSocketSubject from RxJS or integrate with Socket.io for bidirectional communication.</p>",
        "open": false
      },
      {
        "question": "How do you implement global error messages for forms?",
        "answer": "<p>Create a service that handles form error messages and reuse it across components.</p>",
        "open": false
      },
      {
        "question": "How do you implement dark mode dynamically?",
        "answer": "<p>Toggle a CSS class on body, use CSS variables, and optionally store user preference in localStorage.</p>",
        "open": false
      },
      {
        "question": "How do you handle multiple simultaneous API requests?",
        "answer": "<p>Use forkJoin for parallel requests or combineLatest for streams that emit multiple values.</p>",
        "open": false
      },
      {
        "question": "How would you implement optimistic UI updates?",
        "answer": "<p>Update the UI immediately, send API request, and roll back changes if the request fails.</p>",
        "open": false
      },
      {
        "question": "How do you implement custom structural directives?",
        "answer": "<p>Create a directive with @Directive decorator and use ViewContainerRef to manipulate the DOM.</p>",
        "open": false
      },
      {
        "question": "How do you implement server-side rendering (SSR) in Angular?",
        "answer": "<p>Use Angular Universal to render the app on the server for better SEO and faster first paint.</p>",
        "open": false
      },
      {
        "question": "How do you implement route guards for authentication and authorization?",
        "answer": "<p>Use canActivate, canActivateChild, and canLoad guards and inject an AuthService to validate user roles.</p>",
        "open": false
      },
      {
        "question": "How do you handle environment-specific configurations?",
        "answer": "<p>Use environment.ts files and optionally inject runtime configuration using APP_INITIALIZER.</p>",
        "open": false
      },
      {
        "question": "How do you implement modular architecture for large applications?",
        "answer": "<p>Separate features into modules, use SharedModule for reusable components, CoreModule for singleton services.</p>",
        "open": false
      },
      {
        "question": "How do you implement preloading strategies for certain modules?",
        "answer": "<p>Create a custom PreloadingStrategy and set preload: true for modules you want preloaded.</p>",
        "open": false
      },
      {
        "question": "How do you implement an image lazy-loading strategy?",
        "answer": "<p>Use native loading=\"lazy\" on img tags or IntersectionObserver API for more control.</p>",
        "open": false
      },
      {
        "question": "How do you optimize Angular animations for performance?",
        "answer": "<p>Use animation triggers wisely, avoid complex DOM changes, and use Angular's built-in animation utilities.</p>",
        "open": false
      },
      {
        "question": "How do you manage component-level caching?",
        "answer": "<p>Use RouteReuseStrategy or memoize heavy calculations in services or component properties.</p>",
        "open": false
      },
      {
        "question": "How do you implement offline support in Angular PWA?",
        "answer": "<p>Use Angular service worker, configure ngsw-config.json to cache assets and API calls.</p>",
        "open": false
      },
      {
        "question": "How do you prevent XSS attacks in Angular templates?",
        "answer": "<p>Use Angular's built-in sanitization, avoid innerHTML binding with unsanitized content, and use DomSanitizer when needed.</p>",
        "open": false
      },
      {
        "question": "How do you implement a reusable modal dialog?",
        "answer": "<p>Use Angular Material Dialog, pass data via MAT_DIALOG_DATA, and handle close events.</p>",
        "open": false
      },
      {
        "question": "How do you handle conditional module loading?",
        "answer": "<p>Use loadChildren with dynamic imports and optionally CanLoad guard to restrict loading based on conditions.</p>",
        "open": false
      },
      {
        "question": "How do you handle large forms with nested FormArrays efficiently?",
        "answer": "<p>Break forms into smaller child components, use OnPush, and manage controls via FormArray methods.</p>",
        "open": false
      },
      {
        "question": "How do you implement custom validators in reactive forms?",
        "answer": "<p>Create a function that returns ValidatorFn and attach it to FormControl.</p><pre><code>function customValidator(control: AbstractControl): ValidationErrors | null { return null; }</code></pre>",
        "open": false
      },
      {
        "question": "How do you implement WebSocket-based data streams?",
        "answer": "<p>Use RxJS WebSocketSubject or libraries like Socket.io-client and manage subscriptions properly.</p>",
        "open": false
      },
      {
        "question": "How do you implement server-side pagination?",
        "answer": "<p>Send page index and page size in API requests, update table components on response.</p>",
        "open": false
      },
      {
        "question": "How do you implement debounce on reactive form value changes?",
        "answer": "<p>Use valueChanges.pipe(debounceTime(300), distinctUntilChanged()) before subscribing.</p>",
        "open": false
      },
      {
        "question": "How do you implement authentication with refresh tokens?",
        "answer": "<p>Store short-lived access token in memory, refresh token in HttpOnly cookie, intercept 401s to refresh.</p>",
        "open": false
      },
      {
        "question": "How do you implement shared state management for a large app?",
        "answer": "<p>Use NgRx Store for global state management, selectors for derived state, and Effects for side effects.</p>",
        "open": false
      },
      {
        "question": "How do you improve SEO for an Angular SPA?",
        "answer": "<p>Use Angular Universal for server-side rendering and prerender critical routes.</p>",
        "open": false
      },
      {
        "question": "How do you handle scroll position when navigating between routes?",
        "answer": "<p>Use Router's scrollPositionRestoration: 'enabled' or store scroll manually in a service.</p>",
        "open": false
      },
      {
        "question": "How do you implement feature toggles?",
        "answer": "<p>Use environment flags, remote config service, or a feature service that enables/disables UI features.</p>",
        "open": false
      },
      {
        "question": "How do you detect memory leaks in Angular?",
        "answer": "<p>Use Chrome DevTools Memory tab, ng-profiler, and ensure proper unsubscribing and component destruction.</p>",
        "open": false
      },
      {
        "question": "How do you implement conditional CSS classes efficiently?",
        "answer": "<p>Use [ngClass] or [class.className] bindings with boolean expressions.</p>",
        "open": false
      },
      {
        "question": "How do you implement a multi-step wizard form?",
        "answer": "<p>Break form into FormGroups per step, store progress in a parent FormGroup, and navigate steps conditionally.</p>",
        "open": false
      },
      {
        "question": "How do you implement a responsive layout in Angular?",
        "answer": "<p>Use CSS Flex/Grid, Angular CDK Layout, and media queries to adjust UI for different screens.</p>",
        "open": false
      },
      {
        "question": "How do you implement drag-and-drop in Angular?",
        "answer": "<p>Use Angular CDK DragDropModule and configure cdkDropList and cdkDrag elements.</p>",
        "open": false
      },
      {
        "question": "How do you handle repeated API polling?",
        "answer": "<p>Use RxJS interval or timer with switchMap to call the API repeatedly.</p>",
        "open": false
      },
      {
        "question": "How do you implement a custom directive that shows tooltips?",
        "answer": "<p>Create a directive, inject ElementRef and Renderer2, and manage tooltip display on hover events.</p>",
        "open": false
      },
      {
        "question": "How do you handle form field errors dynamically?",
        "answer": "<p>Create a reusable error component and show messages based on validation errors using FormControl.errors.</p>",
        "open": false
      },
      {
        "question": "How do you implement a global loading spinner?",
        "answer": "<p>Use a shared service to toggle a loading flag and display a spinner component based on its state.</p>",
        "open": false
      }
  ]
  