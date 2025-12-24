export const ngqa = [
  {
    "question": "Angular 20 Updates?",
    "answer": `<div class="angular-v20">

    <div class="section">
      <h2>Angular Version 20 – Complete Overview</h2>
      <p>
        Angular 20 introduces significant improvements focused on
        <strong>performance</strong>, <strong>developer experience</strong>,
        and <strong>modern reactivity</strong>. The framework moves closer
        to explicit, predictable updates and JavaScript-first templates.
      </p>
    </div>
  
    <!-- 1 -->
    <div class="section">
      <h3>1. Zoneless Change Detection (Developer Preview)</h3>
      <p>
        Angular can now run without <strong>Zone.js</strong>. In zoneless
        mode, Angular updates the UI only when changes are explicitly
        triggered.
      </p>
  
      <ul>
        <li>Improves performance by avoiding unnecessary change detection</li>
        <li>Gives developers full control over UI updates</li>
      </ul>
  
      <p><strong>UI updates occur when:</strong></p>
      <ul>
        <li>A signal value changes</li>
        <li>A template event is triggered (e.g. click)</li>
        <li><code>ChangeDetectorRef.markForCheck()</code> is called</li>
      </ul>
  
      <pre><code>
  <button (click)="count.set(count() + 1)">Increment</button>
  <p>{{ count() }}</p>
      </code></pre>
    </div>
  
    <!-- 2 -->
    <div class="section">
      <h3>2. Signals (Stable)</h3>
      <p>
        Signals are now <strong>stable and production-ready</strong>.
        They provide a simpler alternative to RxJS for local and UI state.
      </p>
  
      <ul>
        <li>Less boilerplate than Observables</li>
        <li>Automatic dependency tracking</li>
        <li>Works seamlessly with zoneless mode</li>
      </ul>
  
      <pre><code>
  import { signal } from '@angular/core';
  
  count = signal(0);
      </code></pre>
    </div>
  
    <!-- 3 -->
    <div class="section">
      <h3>3. Computed Signals</h3>
      <p>
        Computed signals automatically derive values from other signals
        and update only when dependencies change.
      </p>
  
      <pre><code>
  total = computed(() => this.price() * this.quantity());
      </code></pre>
    </div>
  
    <!-- 4 -->
    <div class="section">
      <h3>4. Effect API</h3>
      <p>
        Effects allow you to react to signal changes and perform side
        effects such as logging, API calls, or DOM updates.
      </p>
  
      <pre><code>
  effect(() => {
    console.log('Count changed:', this.count());
  });
      </code></pre>
    </div>
  
    <!-- 5 -->
    <div class="section">
      <h3>5. JavaScript-Like Templates</h3>
      <p>
        Angular templates now feel closer to native JavaScript,
        supporting expressions like exponentiation and cleaner syntax.
      </p>
  
      <pre><code>
  <p>{{ 2 ** 8 }}</p>
      </code></pre>
  
      <p><strong>Output:</strong></p>
      <pre><code>256</code></pre>
    </div>
  
    <!-- 6 -->
    <div class="section">
      <h3>6. Faster SSR Hydration</h3>
      <p>
        Server-Side Rendering hydration has been optimized, resulting in:
      </p>
  
      <ul>
        <li>Faster initial page load</li>
        <li>Reduced client-side reprocessing</li>
        <li>Smoother transition from server to client</li>
      </ul>
    </div>
  
    <!-- 7 -->
    <div class="section">
      <h3>7. Improved Standalone APIs</h3>
      <p>
        Angular 20 continues to enhance <strong>standalone components</strong>,
        reducing the need for NgModules.
      </p>
  
      <pre><code>
  @Component({
    standalone: true,
    selector: 'app-example',
    template: '<p>Hello Angular 20</p>'
  })
  export class ExampleComponent {}
      </code></pre>
    </div>
  
    <!-- 8 -->
    <div class="section">
      <h3>8. Reduced RxJS Dependency for UI State</h3>
      <p>
        Simple UI state no longer requires RxJS. Signals are the preferred
        solution for component-level state.
      </p>
  
      <p><strong>Before (RxJS):</strong></p>
      <pre><code>
  count$ = new BehaviorSubject(0);
      </code></pre>
  
      <p><strong>Now (Signals):</strong></p>
      <pre><code>
  count = signal(0);
      </code></pre>
    </div>
  
    <!-- 9 -->
    <div class="section">
      <h3>9. Better Tooling and Style Guide</h3>
      <p>
        Angular 20 improves CLI tooling, lint rules, and official style
        guidance to promote:
      </p>
  
      <ul>
        <li>Cleaner project structure</li>
        <li>More consistent codebases</li>
        <li>Better defaults for modern Angular apps</li>
      </ul>
    </div>
  
    <!-- 10 -->
    <div class="section">
      <h3>10. Performance-First Architecture</h3>
      <p>
        Combined improvements from signals, zoneless mode, and faster
        hydration result in:
      </p>
  
      <ul>
        <li>Smaller runtime overhead</li>
        <li>More predictable rendering</li>
        <li>Better scalability for large applications</li>
      </ul>
    </div>
  
  </div>
  `,
    "open": false
  }
]