JAVA Concurrency Utilities

java.util.concurrent defines the core features that support alternatives to the built-in approaches to synchronization and interthread communication. Key features :

Synchronizer:
offer high level ways of synchronizing the interactions between multiple threads.
Semaphore, CountDownLatch, CyclicBarrier, Exchanger, Phaser

Executors:
Initiates and controls the execution of threads. Offers an alternative to managing threads through the Thread class.

Concurrent Collections:
Provide concurrency support. Examples:
ArrayBlockingQueue, ConcurrentHashMap, ConcurrentLinkedDeque, ConcurrentLinkedQueue, etc.

Locks:
Objects that offer an alternative to using "synchronized" to control access to a shared resource.

Atomic Operations:
Offers an alternative to the other synchronization features when reading or writing the value of same types of variables.

The Fork/Join Framework:
Used for parallel programming
