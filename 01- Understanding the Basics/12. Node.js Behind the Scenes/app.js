/*
 Node.js

- Uses single thread
- Thread: Set of instructions/process that are executed by CPU's

Question:
- How it manages multiple request at the same time
- Because if we're NOT able to assign each request their thread, then it would all end up in the same thread

Performant:
- Event loop spins up and runs when program starts
- Function that are NOT long running tasks (like not take more than 200ms to execute) are executed in the main thread after it is removed from
callback queue by event loop

Security:
We don't spoil data from request A to B
- We have registered a callback for every request, so each request have their own callback which is scoped to itself and hence not spoil data
from request A to B

Worker Pool
- Long running tasks are offloaded to 'worker pool' (ex: fs)
- It is detached from javascript
- It is close intervened with operating system, and hence can spin up multiple thread
- Once this task is done, it'll trigger event loop which in turn then put that appropriate callback in the main thread 

Event Loop
- Keeps nodejs running
- At beginning of each iteration it checks whether there are any
1. Timers Queue
=> executes setTimeout, setInterval callbacks
2. Callback/Task Queue
=> executes I/O related code
=> If there are too many callback it defers it to some next iterations
    What is I/O?
    => Disk & Network operations (reading, writing file, making request) (Blocking code)
3. Micro-Task Queue
=> It is given the first priority
=> It comprises of 2 callback queue
    3.1. NextTick Queue
    => executes process.exit() callbacks
    3.2. Micro-Task Queue
    => executes promise callback
4. Poll Queue
=> Retrieve new I/O events, execute their callbacks
=> It'll execute this immediately if possible, if NOT then it registers it as pending callbacks
=> If there are any timer callbacks, it will jump there and execute it immediately and finish the iteration, otherwise it will continue
5. Check Queue
=> execute setImmediate callbacks after any open callback have been executed
=> faster than setTimeout with 1ms of open duration but after the current cycle is finished or atleast open callbacks that were due to be
handled in the current iteration
6. End Queue
=> executes close Event Listeners callbacks

- If there is NO event listeners registered then program might end but in our node web server case it never ends (until we do it manually)
- Node.js keeps tracks of its open event listeners 
- It has a counter reference or refs which is increment by 1 for every new callback that it is registered 
(for every new future work it has to do) (refs == 0)
And it reduces that counter by 1 for each callback that it does NOT need anymore
*/

