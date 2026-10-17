/**
 * AI Intelligence & Algorithmic Scoring Service
 * 100% Free, zero-cost, server-side NLP & heuristic AI engine.
 * Powers all 8 AI features without external paid APIs.
 */

const ROLE_KNOWLEDGE_BASE = {
  'telecalling executive': {
    coreSkills: ['Telecalling', 'Customer Support', 'Cold Calling', 'Voice Process', 'Communication', 'BPO', 'Objection Handling', 'CRM Operations', 'Lead Qualification'],
    salaryAvg: '₹3,00,000 - ₹6,50,000',
    careerPaths: [
      {
        path: 'Inside Sales & Account Executive Track',
        y1: 'Master high-conversion cold scripting, B2B outbound qualification, and CRM management',
        y2: 'Manage high-ticket inbound demos, pipeline nurturing, and contract closures',
        y3: 'Senior Inside Sales Manager / Key Account Executive'
      },
      {
        path: 'Customer Operations & Team Leadership',
        y1: 'Quality monitoring, team floor training, call calibration workshops',
        y2: 'Floor Supervisor managing a team of 15-25 telecalling agents',
        y3: 'Operations Manager / Head of Voice Process'
      }
    ],
    interviewBank: [
      {
        id: 'tc-h1',
        category: 'Problem Solving',
        difficulty: 'Hard',
        question: 'A high-value enterprise prospect answers furiously: "I am registered on the National DNC registry, your company has badgered me three times this week, and I am lodging a regulatory complaint right now." How do you de-escalate this crisis immediately, protect the organization legally, and convert the call into a compliant resolution?',
        keywords: ['de-escalate', 'dnc', 'regulatory', 'crm update', 'opt-out', 'empathy', 'active listening', 'compliance', 'calm tonality'],
        exemplar: 'I immediately lower my vocal pitch and acknowledge their frustration sincerely without being defensive: "I completely understand your frustration, sir, and I sincerely apologize for this intrusion." I verify their contact number, assure them that I am marking their record as Permanent DNC across our CRM system in real-time, and offer to send written confirmation of their removal. By prioritizing compliance, remaining empathetic, and taking direct responsibility, I defuse the hostility and protect company reputation.'
      },
      {
        id: 'tc-h2',
        category: 'Technical',
        difficulty: 'Hard',
        question: 'Walk me through how you analyze and optimize the end-to-end telecalling conversion funnel: from contact rate (Answer Rate), hook rate at the 15-second mark, objection handling conversion, to qualified booked appointments. Which dialer and CRM metrics (AHT, FCR, Call Abandonment Rate) do you track?',
        keywords: ['conversion funnel', 'contact rate', 'hook rate', 'aht', 'fcr', 'abandonment rate', 'crm', 'dialer', 'lead qualification', 'kpis'],
        exemplar: 'I track five core metrics daily: Contact Rate (aiming for >35%), 15-second Hook Retention (>60%), Objection-to-Meeting Conversion (>22%), Average Handling Time (AHT around 3-4 mins for qualification), and First Call Resolution (FCR). If hook retention dips, I modify the pattern-interrupt opening script. If objection conversion is weak, I conduct objection-handling roleplays and A/B test pitch variants in our CRM dialer.'
      },
      {
        id: 'tc-h3',
        category: 'Behavioral',
        difficulty: 'Hard',
        question: 'Describe an outbound campaign where you faced consecutive days of aggressive rejection, low connect rates, and were at only 50% of your monthly quota by day 15. What specific psychological and tactical adjustments did you execute to rebound and surpass your quota by month-end?',
        keywords: ['quota', 'rejection', 'mindset', 'tactical change', 'scripting', 'cadence', 'speed to lead', 'resilience', 'conversion'],
        exemplar: 'Facing a mid-month deficit, I analyzed call recordings and noticed our connect rates dropped between 11 AM - 2 PM. I restructured my calling blocks to peak engagement windows (8:30 - 10:30 AM and 4:30 - 6:30 PM), tightened my initial 15-second value proposition, and implemented a multi-touch WhatsApp/email follow-up cadence. I increased daily call volume from 80 to 110, closed 28 qualified bookings in the second half, and finished the month at 114% of quota.'
      },
      {
        id: 'tc-m1',
        category: 'Problem Solving',
        difficulty: 'Medium',
        question: 'How do you execute the "Feel, Felt, Found" method and ROI value re-anchoring when a qualified prospect says: "Your solution sounds interesting, but our budget is completely frozen until the next financial year"?',
        keywords: ['feel felt found', 'budget frozen', 'objection handling', 'roi', 'nurture', 'value anchor', 'follow-up'],
        exemplar: 'I use Feel-Felt-Found: "I completely understand how you feel regarding strict budget cycles; several of our current enterprise clients felt the exact same way before discovering our pilot phase. What they found was that starting with a zero-risk quarterly pilot yielded a 3x ROI before their new budget even opened." I then offer a structured 15-minute briefing or a low-commitment executive summary.'
      },
      {
        id: 'tc-m2',
        category: 'Technical',
        difficulty: 'Medium',
        question: 'How do you structure the critical first 20 seconds of an outbound cold call to break defensive barriers, establish immediate credibility, and gain permission to ask diagnostic questions?',
        keywords: ['pattern interrupt', 'opening hook', 'credibility', 'permission', 'brevity', 'tonality', 'diagnostic questions'],
        exemplar: 'I use a respectful pattern interrupt: "Hi [Name], this is [My Name] from ORASSYS. I know I caught you in the middle of your day—do you have 30 seconds for me to tell you why I called, and you can decide if it makes sense to continue?" This transparent, polite approach gives the prospect control, disarms sales resistance, and yields an 80%+ permission rate to proceed.'
      },
      {
        id: 'tc-m3',
        category: 'Problem Solving',
        difficulty: 'Medium',
        question: 'You receive a fresh batch of 250 trade-show attendee leads. How do you segment, prioritize, and design your calling cadence over the first 72 hours to maximize connection rates?',
        keywords: ['lead segmentation', 'speed to lead', 'trade-show', 'prioritization', 'cadence', 'crm logging', 'multi-touch'],
        exemplar: 'I tier leads into Tier 1 (Decision Makers/C-suite), Tier 2 (Department Heads), and Tier 3 (General Visitors). I initiate speed-to-lead contact within 24 hours for Tier 1 with personalized references to their booth interactions. For non-answers, I schedule a 3-touch sequence across phone, personalized email, and LinkedIn within 72 hours, logging all interactions in the CRM.'
      },
      {
        id: 'tc-f1',
        category: 'Technical',
        difficulty: 'Fundamental',
        question: 'What is the operational difference between Inbound and Outbound calling, and why is meticulous disposition logging in the CRM mandatory immediately following every call?',
        keywords: ['inbound', 'outbound', 'crm disposition', 'data integrity', 'follow-up', 'pipeline', 'notes'],
        exemplar: 'Inbound calls are buyer-initiated inquiries with high intent where active listening and rapid solutioning are paramount. Outbound involves proactive prospecting requiring cold rapport building. Post-call disposition logging (e.g., Interested, Callback, Not Answering, DNC) ensures pipeline integrity, prevents duplicate harassing calls, and guarantees prompt follow-ups.'
      },
      {
        id: 'tc-f2',
        category: 'Behavioral',
        difficulty: 'Fundamental',
        question: 'How do you maintain vocal clarity, enthusiasm, professional empathy, and emotional resilience across 80+ cold calls every single business day?',
        keywords: ['vocal clarity', 'enthusiasm', 'posture', 'hydration', 'resilience', 'active listening', 'breaks'],
        exemplar: 'I stand up while delivering high-stakes calls to improve diaphragmatic breathing and vocal projection. I hydrate consistently, organize calls in 45-minute sprint blocks with 5-minute resets, and mentally detach rejection of the pitch from personal worth.'
      }
    ]
  },
  'pl/sql developer': {
    coreSkills: ['PL/SQL', 'Oracle Database', 'Stored Procedures', 'SQL Queries', 'Performance Tuning', 'Cursors', 'Triggers', 'Packages', 'Exception Handling', 'AWR/ASH'],
    salaryAvg: '₹6,00,000 - ₹15,00,000',
    careerPaths: [
      {
        path: 'Database Architect & Core Oracle Specialist',
        y1: 'Advanced PL/SQL optimization, Autonomous Transactions, Partitioning, AWR/ASH Diagnostics',
        y2: 'Exadata architecture, GoldenGate replication, Enterprise VLDB schema design',
        y3: 'Principal Database Architect'
      },
      {
        path: 'Full Stack Data & Cloud Migration Specialist',
        y1: 'Oracle to PostgreSQL/Aurora migration, AWS DMS, Python ETL pipelines',
        y2: 'Cloud data warehousing (Snowflake/Redshift), Hybrid database synchronization',
        y3: 'Head of Enterprise Data Engineering'
      }
    ],
    interviewBank: [
      {
        id: 'pl-h1',
        category: 'Technical',
        difficulty: 'Hard',
        question: 'A critical batch job processing 15 million rows fails midway with "ORA-01555: snapshot too old" and rollback segment exhaustion. Walk through your systematic diagnostic process using AWR/ASH, and explain how you refactor the procedure using BULK COLLECT with LIMIT, FORALL with SAVE EXCEPTIONS, and commit batching.',
        keywords: ['ora-01555', 'snapshot too old', 'undo tablespace', 'bulk collect', 'limit', 'forall', 'save exceptions', 'awr', 'ash', 'commit batching'],
        exemplar: 'ORA-01555 occurs when a long-running query requires read-consistent before-images from UNDO blocks that were overwritten by concurrent transactions or by fetch-across-commit anti-patterns. I inspect `V$UNDOSTAT` and ASH to confirm undo retention shortages. I refactor the code to remove row-by-row cursors and replace them with `BULK COLLECT ... LIMIT 5000` into PL/SQL collections, followed by `FORALL ... SAVE EXCEPTIONS` for batch DML. I commit only after each bulk chunk completes, ensuring the undo tablespace is not exhausted while capturing any row-level exceptions in `SQL%BULK_EXCEPTIONS`.'
      },
      {
        id: 'pl-h2',
        category: 'Problem Solving',
        difficulty: 'Hard',
        question: 'An execution plan unexpectedly flips from an efficient Index Unique/Range Scan to a costly Full Table Scan on a 60-million-row partitioned table following a DBMS_STATS collection, driving database CPU to 100%. How do you analyze DBMS_XPLAN.DISPLAY_CURSOR, identify bind variable peeking or frequency histogram skew, and permanently stabilize the plan using SQL Plan Baselines (SPM)?',
        keywords: ['execution plan', 'dbms_xplan.display_cursor', 'full table scan', 'bind peeking', 'histograms', 'spm', 'sql plan baseline', 'cardinality'],
        exemplar: 'I run `SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY_CURSOR(sql_id, child_number, "ALLSTATS LAST"))` to compare the optimizer’s estimated E-Rows versus actual A-Rows. An order-of-magnitude discrepancy usually points to bind variable peeking where the plan was compiled with an unrepresentative bind value against skewed histogram data. To permanently resolve it without risky application code changes, I capture the historically proven good plan from the AWR cache and create a verified SQL Plan Baseline (`DBMS_SPM.LOAD_PLANS_FROM_CURSOR_CACHE`) to force the optimizer to choose the optimal plan.'
      },
      {
        id: 'pl-h3',
        category: 'Technical',
        difficulty: 'Hard',
        question: 'Explain the internal architecture and transaction isolation semantics of Autonomous Transactions (PRAGMA AUTONOMOUS_TRANSACTION). What are the exact failure modes regarding distributed deadlocks, uncommitted parent state invisibility, and rollback isolation when used inside database triggers?',
        keywords: ['pragma autonomous_transaction', 'deadlock', 'transaction isolation', 'commit', 'rollback', 'triggers', 'parent transaction', 'audit log'],
        exemplar: 'An autonomous transaction suspends the calling parent transaction, opens an independent session state, and executes its own DML with a mandatory explicit COMMIT or ROLLBACK before returning control. Critically, the autonomous transaction CANNOT see uncommitted changes made by the parent transaction unless the parent has committed (Read Committed isolation). If an autonomous trigger attempts to update a row locked by its own parent transaction, a self-deadlock occurs (ORA-00060). It should be reserved strictly for independent logging or audit trails.'
      },
      {
        id: 'pl-m1',
        category: 'Problem Solving',
        difficulty: 'Medium',
        question: 'How do you detect, reproduce, and resolve Mutating Table Errors (ORA-04091) when an AFTER INSERT OR UPDATE row-level trigger needs to aggregate and validate data from the exact table being modified?',
        keywords: ['ora-04091', 'mutating table', 'compound trigger', 'statement trigger', 'package collection', 'row-level trigger'],
        exemplar: 'ORA-04091 happens when a row-level trigger tries to query or modify the table currently undergoing DML, because the table is in an inconsistent state mid-statement. In modern Oracle (11g+), the industry standard solution is a Compound Trigger: during `BEFORE STATEMENT` we initialize an in-memory PL/SQL associative array; during `AFTER EACH ROW` we record the changed IDs into the array without touching the table; and during `AFTER STATEMENT` (when the mutating state is lifted), we execute the aggregated validation query safely.'
      },
      {
        id: 'pl-m2',
        category: 'Technical',
        difficulty: 'Medium',
        question: 'Compare Weakly Typed Ref Cursors (SYS_REFCURSOR) vs Strongly Typed Ref Cursors vs Pipelined Table Functions. In what architectural scenarios should each be returned to an external application tier (e.g., Spring Boot or Node.js)?',
        keywords: ['sys_refcursor', 'ref cursor', 'strongly typed', 'pipelined function', 'streaming', 'inter-process', 'memory footprint'],
        exemplar: 'A Strongly Typed Ref Cursor defines a return type at compile time (`RETURN employees%ROWTYPE`), ensuring type safety. SYS_REFCURSOR is weakly typed, allowing dynamic query definitions at runtime, making it the de-facto standard for returning result sets to Java JDBC/Node.js tiers. Pipelined Table Functions (`PIPE ROW`) stream transformed data out in chunks before the entire query completes, ideal for ETL memory optimization and consuming PL/SQL transformations directly inside SQL `TABLE()` operators.'
      },
      {
        id: 'pl-m3',
        category: 'Behavioral',
        difficulty: 'Medium',
        question: 'Describe a high-stakes production incident where an unindexed foreign key or library cache lock (cursor: pin S wait on X) paralyzed transaction processing. How did you diagnose the root cause and safely deploy a hotfix?',
        keywords: ['foreign key index', 'library cache lock', 'v$session', 'v$locked_object', 'table lock', 'hotfix', 'root cause'],
        exemplar: 'During peak trading hours, transactions hung with severe enqueue TM waits. Querying `V$SESSION_BLOCKERS` and `V$LOCKED_OBJECT`, I discovered a child table had an unindexed foreign key column. When the parent table underwent updates, Oracle had to acquire a full-table share lock on the entire child table, serializing all concurrent inserts. I created the missing index online (`CREATE INDEX ... ONLINE`) during a brief throttled window, immediately clearing the enqueue locks, and added automated DDL index audits to our CI/CD pipeline.'
      },
      {
        id: 'pl-f1',
        category: 'Technical',
        difficulty: 'Fundamental',
        question: 'Explain the difference between NOCOPY compiler hint, IN OUT parameter passing, and the performance benefits when handling large PL/SQL record collections.',
        keywords: ['nocopy', 'in out', 'pass by reference', 'pass by value', 'collections', 'memory overhead', 'performance'],
        exemplar: 'By default, PL/SQL passes `OUT` and `IN OUT` parameters by value: it creates a copy of the actual parameter upon entry and copies it back upon normal exit. For large arrays with 100,000 elements, this duplicates memory and CPU cycles. The `NOCOPY` compiler hint instructs the compiler to pass the parameter by reference, eliminating memory duplication and boosting execution speed significantly.'
      },
      {
        id: 'pl-f2',
        category: 'Problem Solving',
        difficulty: 'Fundamental',
        question: 'How do you implement enterprise-grade exception handling in PL/SQL using RAISE_APPLICATION_ERROR, SQLCODE, SQLERRM, and DBMS_UTILITY.FORMAT_ERROR_BACKTRACE to ensure the exact line number of failure is preserved?',
        keywords: ['raise_application_error', 'sqlcode', 'sqlerrm', 'format_error_backtrace', 'line number', 'call stack', 'logging'],
        exemplar: 'In the `WHEN OTHERS THEN` block, relying solely on `SQLERRM` only provides the error message without the offending source line number. I log `DBMS_UTILITY.FORMAT_ERROR_BACKTRACE` and `FORMAT_CALL_STACK` to capture the exact nested line number where the exception originated, write the error details into an autonomous logging table, and then call `RAISE_APPLICATION_ERROR(-20001, ...)` or re-raise with `RAISE` to alert the calling tier.'
      }
    ]
  },
  'devops engineer': {
    coreSkills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Linux', 'Prometheus', 'Grafana', 'ArgoCD', 'Ansible', 'Helm'],
    salaryAvg: '₹8,00,000 - ₹20,00,000',
    careerPaths: [
      {
        path: 'Site Reliability Engineering (SRE) & Platform Architect',
        y1: 'Terraform IaC, Zero-downtime Blue/Green deployments, K8s autoscaling, Prometheus/Grafana',
        y2: 'Multi-region disaster recovery, Chaos Engineering, SLI/SLO tracking, Service Mesh (Istio)',
        y3: 'Director of Cloud Infrastructure & SRE'
      },
      {
        path: 'DevSecOps & Enterprise Cloud Security',
        y1: 'Container scanning (Trivy), Secret rotation (Vault), SAST/DAST integration in pipelines',
        y2: 'Cloud compliance (SOC2/ISO27001), IAM Zero Trust architectures, GuardDuty/Falco runtime security',
        y3: 'Chief Information Security Officer (CISO) / Head of Cloud Security'
      }
    ],
    interviewBank: [
      {
        id: 'do-h1',
        category: 'Technical',
        difficulty: 'Hard',
        question: 'Under a traffic surge of 70,000 req/sec, your production Kubernetes cluster experiences sporadic 504 Gateway Timeouts, CrashLoopBackOffs, and pod evictions. How do you triage Linux kernel conntrack table exhaustion, CNI network interface saturation, CoreDNS throttling, and cgroup OOMKilled events?',
        keywords: ['conntrack', 'cni', 'coredns', 'oomkilled', 'cgroup', 'dmesg', 'sysctl', 'p99 latency', 'node-problem-detector'],
        exemplar: 'I execute a triage checklist: (1) Run `dmesg | grep nf_conntrack` on worker nodes; if conntrack is saturated, DNS lookups drop silently. I increase `nf_conntrack_max` via sysctl and deploy NodeLocal DNSCache to eliminate DNS hops to CoreDNS pods. (2) Inspect `kubectl describe pod` for `OOMKilled: Exit Code 137` to differentiate kernel memory limits from JVM heap limits. (3) Check CNI IP exhaustion and Prometheus p99 latency spikes on kube-proxy IPVS tables. (4) Scale out horizontal pod autoscalers (HPA) backed by custom Prometheus queries rather than raw CPU.'
      },
      {
        id: 'do-h2',
        category: 'Problem Solving',
        difficulty: 'Hard',
        question: 'How do you architect an Active-Active multi-region disaster recovery pipeline using Terraform, AWS Route53 latency-based routing, cross-region Aurora/Postgres replication, and state-drift reconciliation without causing split-brain write conflicts across geographically separated clusters?',
        keywords: ['multi-region', 'active-active', 'disaster recovery', 'terraform', 'split-brain', 'aurora global database', 'route53', 'drift detection'],
        exemplar: 'I use Terraform modules with remote state locks in DynamoDB to provision mirrored infrastructure across primary and secondary regions. For databases, I implement Aurora Global Database with a single designated primary write endpoint and cross-region low-latency read replicas (<1s replication lag). To prevent split-brain write collisions during regional partitions, write traffic is strictly pinned via Route 53 health-checked routing policies with automated DNS failover that mandates an explicit fence-and-promote runbook before switching write endpoints.'
      },
      {
        id: 'do-h3',
        category: 'Technical',
        difficulty: 'Hard',
        question: 'Walk through how you implement an automated Canary deployment pipeline using Argo Rollouts or Flagger with Istio Service Mesh, integrating automated Prometheus metric analysis (Error rate < 0.1%, p95 < 250ms) and automated instant rollback.',
        keywords: ['canary', 'argo rollouts', 'flagger', 'istio', 'traffic splitting', 'prometheus', 'automated rollback', 'sli/slo'],
        exemplar: 'I configure an `Argo Rollout` resource defining progressive weight increments: 5% traffic for 10 minutes, advancing to 25%, 50%, and 100%. Istio VirtualServices dynamically manage the ingress traffic weights. An `AnalysisTemplate` queries Prometheus every 30 seconds for SLI metrics (HTTP 5xx rate and latency p95). If the error rate exceeds 0.1% or latency surpasses 250ms during any step, Argo Rollouts automatically aborts the rollout, instantly reroutes 100% traffic back to the stable ReplicaSet, and notifies Slack via webhooks.'
      },
      {
        id: 'do-m1',
        category: 'Technical',
        difficulty: 'Medium',
        question: 'How do you architect dynamic secret management using HashiCorp Vault and Kubernetes: automating dynamic database credential generation, secret leasing, and secret rotation without requiring pod restarts?',
        keywords: ['vault', 'kubernetes secrets', 'dynamic secrets', 'vault agent injector', 'secret rotation', 'mtls', 'service account'],
        exemplar: 'I deploy the HashiCorp Vault Agent Injector sidecar. Pods authenticate with Vault via Kubernetes ServiceAccount tokens. Vault dynamically generates short-lived, individual database credentials via its Database Secrets Engine with a 1-hour TTL. The Vault agent sidecar mounts these credentials into a shared `/vault/secrets` in-memory volume. Application connection pools are configured to reload credentials on file-change signals or periodic token lease renewals, achieving zero-restart secret rotation.'
      },
      {
        id: 'do-m2',
        category: 'Problem Solving',
        difficulty: 'Medium',
        question: 'A production GitHub Actions CI/CD pipeline build time has ballooned from 5 minutes to 42 minutes, blocking hotfixes. How do you analyze bottlenecks and implement Docker layer caching, multi-stage builds, and matrix runners to bring it under 6 minutes?',
        keywords: ['ci/cd', 'docker buildkit', 'layer caching', 'multi-stage', 'parallel matrix', 'cache action', 'pipeline optimization'],
        exemplar: 'I inspect job execution logs and discover three bottlenecks: (1) Re-downloading dependencies on every run; I implement `actions/cache` for npm/pip artifacts. (2) Re-building Docker layers without BuildKit; I enable `DOCKER_BUILDKIT=1` with `--cache-from=type=registry` and order the Dockerfile commands from least-frequently changed (OS packages) to most-frequently changed (source code). (3) Sequential test suites; I split tests into 4 parallel matrix runners. The pipeline duration dropped to 4 minutes 45 seconds.'
      },
      {
        id: 'do-m3',
        category: 'Behavioral',
        difficulty: 'Medium',
        question: 'Describe a zero-day vulnerability (e.g., Log4Shell or OpenSSL flaw) or compromised container image discovered in production. How did you coordinate the rapid patching and enforce supply chain security across all clusters?',
        keywords: ['vulnerability', 'cve', 'trivy', 'cosign', 'image signing', 'sbom', 'supply chain', 'admission controller'],
        exemplar: 'When a critical CVE was published, I ran automated Trivy image scans across our ECR registries, identifying 14 running microservices affected. I collaborated with software leads to update base images, automated build verification in CI/CD, and executed a rolling restart across Kubernetes clusters within 3 hours. To prevent future vulnerabilities, I instituted Sigstore Cosign image signing and Kyverno admission controller policies that reject unsigned container images in production.'
      },
      {
        id: 'do-f1',
        category: 'Technical',
        difficulty: 'Fundamental',
        question: 'Explain the functional differences between Kubernetes ClusterIP, NodePort, LoadBalancer, and Ingress Controller. When should each be used?',
        keywords: ['clusterip', 'nodeport', 'loadbalancer', 'ingress', 'layer 7 routing', 'tls termination', 'networking'],
        exemplar: 'ClusterIP exposes the service on an internal-only IP within the cluster (default for internal microservices). NodePort exposes the service on each node’s IP at a static port (30000-32767). LoadBalancer provisions an external cloud load balancer (AWS NLB/ALB) pointing directly to the service. An Ingress Controller sits as an intelligent Layer 7 reverse proxy, routing traffic to dozens of services based on URL paths and hostnames with unified TLS termination, avoiding the cost of spinning up a cloud load balancer per service.'
      },
      {
        id: 'do-f2',
        category: 'Problem Solving',
        difficulty: 'Fundamental',
        question: 'How do you write a production-ready, secure Dockerfile adhering to least-privilege security principles (non-root user, multi-stage builds, minimal attack surface)?',
        keywords: ['dockerfile', 'multi-stage build', 'non-root user', 'distroless', 'alpine', 'chown', 'least privilege'],
        exemplar: 'I use a multi-stage build: Stage 1 builds the application using a complete SDK image with all compiler dependencies. Stage 2 copies strictly the compiled binaries into a minimal Alpine or Google Distroless runtime image. I create an explicit non-root user and group (`USER appuser`), adjust permissions with `COPY --chown=appuser:appuser`, and configure a health check (`HEALTHCHECK`), ensuring no root privileges or package managers exist in the final production container.'
      }
    ]
  },
  'data analyst': {
    coreSkills: ['SQL', 'Python', 'Pandas', 'Data Cleaning', 'Data Visualization', 'Power BI', 'Tableau', 'Excel', 'Statistics', 'A/B Testing'],
    salaryAvg: '₹5,50,000 - ₹14,00,000',
    careerPaths: [
      {
        path: 'Senior Business Intelligence (BI) Architect',
        y1: 'Advanced SQL window functions, Dimensional modeling (Star/Snowflake), Power BI DAX & Tabular models',
        y2: 'Enterprise data governance, Automated ELT pipelines with dbt and Snowflake',
        y3: 'Director of Business Intelligence & Data Strategy'
      },
      {
        path: 'Data Science & Predictive Analytics Track',
        y1: 'Statistical modeling, Python scikit-learn, Hypothesis testing & experimentation',
        y2: 'Customer segmentation, Churn prediction models, Feature engineering',
        y3: 'Lead Data Scientist'
      }
    ],
    interviewBank: [
      {
        id: 'da-h1',
        category: 'Technical',
        difficulty: 'Hard',
        question: 'A query joining a 200-million-row fact table with multiple dimensions takes 55 minutes to run and crashes the query engine with tempdb memory exhaustion. Walk through how you analyze execution plans, eliminate Cartesian joins, implement partition pruning, window functions, and columnar indexing to cut runtime under 45 seconds.',
        keywords: ['execution plan', 'partition pruning', 'columnar index', 'window functions', 'tempdb', 'cartesian join', 'cte', 'spill to disk'],
        exemplar: 'I inspect the query plan and identify a sort spill-to-disk caused by grouping before filtering and a Cartesian product on an unindexed date key. First, I filter fact partitions by date range upfront to enable partition pruning. Second, I replace self-joins with analytical window functions (`ROW_NUMBER() OVER(PARTITION BY user_id ORDER BY event_time DESC)`) to eliminate multi-pass scans. Third, I verify that the fact table utilizes clustered columnstore indexing, which compresses data by 8x and reads only required columns. The query completed in 32 seconds.'
      },
      {
        id: 'da-h2',
        category: 'Problem Solving',
        difficulty: 'Hard',
        question: 'You are auditing an executive A/B testing dashboard. Overall conversion shows Variant B outperforming Control by 14% (p < 0.01). However, when segmented by device, Control outperforms Variant B on Mobile (+4%) AND on Desktop (+6%). Explain Simpson’s Paradox in this context and how you detect and rectify Sample Ratio Mismatch (SRM).',
        keywords: ["simpson's paradox", 'sample ratio mismatch', 'srm', 'a/b testing', 'confounding variable', 'chi-square', 'statistical significance'],
        exemplar: 'This is a textbook example of Simpson’s Paradox driven by a confounding variable and Sample Ratio Mismatch (SRM). Variant B received a disproportionately large share of Mobile traffic (which inherently converts at a lower baseline rate than Desktop). To test for SRM, I run a Chi-Square goodness-of-fit test on the expected vs actual traffic allocation. Finding p < 0.001 confirms traffic assignment was compromised by a redirect bug or latency bias. I invalidate the experiment, resolve the routing bug, and ensure stratified sampling across device segments in the re-run.'
      },
      {
        id: 'da-h3',
        category: 'Technical',
        difficulty: 'Hard',
        question: 'Explain how you construct dynamic cohort retention curves in SQL: utilizing DATE_TRUNC, MIN(created_at) OVER (PARTITION BY user_id), and date difference logic to compute Week-N retention percentages over time.',
        keywords: ['cohort analysis', 'retention curve', 'date_trunc', 'window function', 'self join', 'churn', 'ltv', 'customer lifecycle'],
        exemplar: 'I structure the query in three CTEs: (1) `UserFirstActivity`: Use `MIN(activity_date) OVER (PARTITION BY user_id)` to assign each user to an acquisition cohort (e.g., `DATE_TRUNC("week", first_date)`). (2) `CohortActivity`: Group subsequent activities by cohort week and calculate `DATE_DIFF(activity_date, cohort_start_date, WEEK)` as `period_number`. (3) `CohortSize & Retention`: Divide the active users in period N by the total cohort size at period 0 and multiply by 100. This outputs a clean matrix showing decay curves across weeks.'
      },
      {
        id: 'da-m1',
        category: 'Technical',
        difficulty: 'Medium',
        question: 'Compare DENSE_RANK(), RANK(), and ROW_NUMBER() in SQL. If you are calculating the top 3 highest revenue-generating transactions per customer where transactions share identical amounts, which function do you choose and why?',
        keywords: ['dense_rank', 'rank', 'row_number', 'partition by', 'ties', 'order by', 'analytical functions'],
        exemplar: '`ROW_NUMBER()` assigns sequential integers (1, 2, 3) arbitrarily breaking ties. `RANK()` assigns identical numbers to ties and skips subsequent numbers (1, 2, 2, 4). `DENSE_RANK()` assigns identical numbers to ties without skipping (1, 2, 2, 3). If business rules require seeing all distinct top transaction tiers without missing ranks, `DENSE_RANK()` is optimal. If the query must return strictly at most 3 physical records, `ROW_NUMBER()` with deterministic secondary tie-breaking is required.'
      },
      {
        id: 'da-m2',
        category: 'Problem Solving',
        difficulty: 'Medium',
        question: 'You receive a dataset of 500,000 customers where 22% of the "Annual Income" column contains nulls and extreme outliers. Walk through how you decide between mean, median, iterative KNN imputation, or deletion without introducing statistical bias.',
        keywords: ['imputation', 'median', 'knn imputation', 'outliers', 'iqr', 'z-score', 'missing data', 'distribution skew'],
        exemplar: 'Mean imputation is invalid because income distributions are heavily right-skewed and pulled by extreme outliers. I calculate the Interquartile Range (IQR) to identify extreme anomalies. Because 22% is too large to drop without significant sample loss, I evaluate whether the missingness is Missing Completely at Random (MCAR) or Missing at Random (MAR) based on age, education, and job title. I use iterative MICE or KNN imputation conditioned on correlated features, and cross-validate that pre- and post-imputation distributions remain aligned.'
      },
      {
        id: 'da-m3',
        category: 'Behavioral',
        difficulty: 'Medium',
        question: 'Describe a project where your statistical findings directly contradicted the intuitive assumptions of senior executives. How did you present data evidence to convince them to change their strategic investment?',
        keywords: ['stakeholder management', 'data storytelling', 'data visualization', 'evidence', 'roi', 'actionable insights'],
        exemplar: 'Leadership believed expanding into a new geographic market was our top growth opportunity based on gross signup volume. My cohort LTV and churn analysis revealed that users in this region had an 82% churn rate within 30 days and negative CAC payback. Instead of presenting raw tables, I created an interactive Tableau dashboard comparing cohort LTV against CAC by region, showing that doubling down on our core market yielded 3.4x greater net revenue. Leadership pivoted budget, saving ₹1.2 Crore in marketing waste.'
      },
      {
        id: 'da-f1',
        category: 'Technical',
        difficulty: 'Fundamental',
        question: 'What is the structural difference between a Star Schema and a Snowflake Schema in enterprise data warehousing, and how do they impact query execution speed vs data storage?',
        keywords: ['star schema', 'snowflake schema', 'fact table', 'dimension table', 'normalization', 'denormalization', 'join overhead'],
        exemplar: 'A Star Schema surrounds a central Fact table with completely denormalized Dimension tables, requiring fewer joins and maximizing OLAP query read performance. A Snowflake Schema normalizes dimension tables into hierarchies (e.g., Product -> Subcategory -> Category), reducing data redundancy and storage footprint at the cost of additional SQL `JOIN` operations that can slow down analytical queries.'
      },
      {
        id: 'da-f2',
        category: 'Problem Solving',
        difficulty: 'Fundamental',
        question: 'How do you calculate Customer Lifetime Value (LTV), Churn Rate, and Average Revenue Per User (ARPU) in SQL or Excel?',
        keywords: ['churn rate', 'ltv', 'arpu', 'formula', 'retention', 'saas metrics'],
        exemplar: '`ARPU = Total Revenue / Total Active Users`. `Churn Rate = Churned Users in Period / Total Users at Start of Period`. `LTV = ARPU / Churn Rate` (or `ARPU * Customer Lifespan * Gross Margin`). Tracking these metrics monthly reveals unit economics and ensures acquisition spend remains profitable.'
      }
    ]
  },
  'generative ai / ml engineer': {
    coreSkills: ['Python', 'Machine Learning', 'Artificial Intelligence', 'NLP', 'TensorFlow', 'PyTorch', 'LLM', 'Deep Learning', 'RAG', 'Vector Databases', 'LangChain'],
    salaryAvg: '₹10,00,000 - ₹25,00,000',
    careerPaths: [
      {
        path: 'Principal AI & LLM Systems Architect',
        y1: 'Enterprise RAG pipelines, Vector indexing (HNSW/Milvus), Prompt guardrails, Quantization (QLoRA)',
        y2: 'Fine-tuning open-source LLMs (Llama-3/Mistral), Distributed inference (vLLM/TGI), Agentic workflows',
        y3: 'Chief AI Officer / Head of Artificial Intelligence'
      },
      {
        path: 'MLOps & Production AI Infrastructure Lead',
        y1: 'Model serving, Feature stores (Feast), Model monitoring & drift detection, GPU cluster management',
        y2: 'DeepSpeed ZeRO, TensorRT optimization, Continuous ML training pipelines (Kubeflow)',
        y3: 'Director of AI Engineering'
      }
    ],
    interviewBank: [
      {
        id: 'ai-h1',
        category: 'Technical',
        difficulty: 'Hard',
        question: 'In an enterprise RAG system indexing 5 million documents, users report severe hallucination and low context precision on complex multi-hop queries. Walk through how you architect Hybrid Search (Dense HNSW + Sparse BM25), Reciprocal Rank Fusion (RRF), Cross-Encoder Re-ranking, and automated evaluation using the RAGAS framework.',
        keywords: ['rag', 'hnsw', 'bm25', 'hybrid search', 'reciprocal rank fusion', 'cross-encoder', 'reranking', 'ragas', 'hallucination', 'context precision'],
        exemplar: 'Dense vector search alone struggles with domain-specific keywords and exact entity IDs. I implement Hybrid Search combining Dense HNSW vector search (OpenAI/Voyage embeddings) with Sparse BM25 lexical search, blending candidate results using Reciprocal Rank Fusion (RRF). I pass top-50 candidates to a Cross-Encoder Re-ranker (e.g., Cohere/bge-reranker-large) to score deep semantic relevance and filter down to top-5. To benchmark improvements, I track RAGAS metrics: Faithfulness (hallucination rate), Answer Relevance, and Context Precision.'
      },
      {
        id: 'ai-h2',
        category: 'Problem Solving',
        difficulty: 'Hard',
        question: 'You must fine-tune a 14B parameter open-source LLM for enterprise medical or legal extraction on limited GPU infrastructure (2x A100 80GB). Detail your parameter-efficient fine-tuning (PEFT) strategy using QLoRA (4-bit NF4), FlashAttention-2, DeepSpeed ZeRO-3, and explain how you prevent catastrophic forgetting.',
        keywords: ['qlora', 'peft', 'nf4', 'flashattention', 'deepspeed', 'zero-3', 'catastrophic forgetting', 'lora rank', 'quantization'],
        exemplar: 'Training a 14B model in fp16 requires >120GB VRAM. I apply QLoRA: quantize the frozen base model to 4-bit NormalFloat (NF4) with double quantization, adding trainable Low-Rank Adaptation (LoRA) adapter matrices on attention and MLP projection layers (rank r=32, alpha=64). I enable FlashAttention-2 to reduce memory footprint from O(N^2) to O(N) and utilize DeepSpeed ZeRO-3 to partition optimizer states across the 2 GPUs. To prevent catastrophic forgetting, I mix in a 15% replay buffer of general domain instruction data and evaluate benchmark validation loss after every epoch.'
      },
      {
        id: 'ai-h3',
        category: 'Technical',
        difficulty: 'Hard',
        question: 'Explain the internal mechanics of the KV Cache during Transformer autoregressive decoding. Why does memory scale linearly with sequence length and batch size, and how do Grouped-Query Attention (GQA), PagedAttention (vLLM), and Speculative Decoding maximize token throughput?',
        keywords: ['kv cache', 'pagedattention', 'vllm', 'gqa', 'speculative decoding', 'throughput', 'autoregressive', 'attention memory'],
        exemplar: 'During autoregressive generation, keys and values of previous tokens are cached to avoid redundant recalculations. In standard Multi-Head Attention, this KV Cache expands rapidly, fragmenting GPU VRAM. Grouped-Query Attention (GQA) reduces cache size by sharing single key-value heads across multiple query heads. PagedAttention (vLLM) resolves virtual memory fragmentation by allocating KV cache blocks dynamically in non-contiguous physical memory like OS virtual paging. Speculative Decoding pairs a small draft model with a large target model to verify multiple tokens in parallel, boosting decoding throughput by 2-3x.'
      },
      {
        id: 'ai-m1',
        category: 'Technical',
        difficulty: 'Medium',
        question: 'Explain the algorithmic difference between HNSW (Hierarchical Navigable Small World) and IVFFlat (Inverted File Flat) indexing in vector databases. What are the trade-offs between recall, query latency, index build time, and RAM footprint?',
        keywords: ['hnsw', 'ivfflat', 'vector search', 'ann', 'cosine similarity', 'recall', 'latency', 'memory footprint'],
        exemplar: 'IVFFlat clusters vectors using k-means into Voronoi cells. During search, it only scans vectors in the closest centroids (`nprobe`). It builds quickly and has low RAM usage, but suffers lower recall and query latency under high scale. HNSW builds a multi-layer graph with logarithmic skip-list traversal. It provides ultra-low query latency (<5ms) and superior recall (>98%), but requires significantly higher RAM and longer index construction times.'
      },
      {
        id: 'ai-m2',
        category: 'Problem Solving',
        difficulty: 'Medium',
        question: 'How do you protect a production LLM application against Indirect Prompt Injection, Jailbreaking, and PII leakage using Guardrails and structured schema enforcement?',
        keywords: ['prompt injection', 'jailbreaking', 'pii leakage', 'guardrails', 'canary tokens', 'instructor', 'json schema'],
        exemplar: 'I implement a multi-layered defense: (1) System prompt boundary isolation with canary tokens to detect prompt leaks. (2) Pre-execution input classification using lightweight models (e.g., Llama-Guard) to screen malicious prompts. (3) Data redaction using Microsoft Presidio to mask PII (credit cards, Aadhaar, phone numbers) before sending context to the model. (4) Post-execution structured output enforcement using Pydantic/Instructor to validate schema compliance and reject rogue markdown or HTML code.'
      },
      {
        id: 'ai-m3',
        category: 'Behavioral',
        difficulty: 'Medium',
        question: 'Describe an ML model that performed exceptionally well during offline cross-validation but degraded severely in production. How did you diagnose data drift / concept drift and automate pipeline recovery?',
        keywords: ['data drift', 'concept drift', 'monitoring', 'feature distribution', 'ks-test', 'evidently ai', 'retraining'],
        exemplar: 'Our credit scoring model achieved an 0.89 AUC offline, but default rates spiked after deployment. I set up Evidently AI and automated Kolmogorov-Smirnov (KS) statistical tests on incoming feature distributions. I discovered that post-pandemic macroeconomic changes shifted user debt-to-income distributions (data drift). I implemented automated weekly feature drift alerts and built an automated retraining pipeline triggered whenever drift metrics breached statistical thresholds.'
      },
      {
        id: 'ai-f1',
        category: 'Technical',
        difficulty: 'Fundamental',
        question: 'Explain the Scaled Dot-Product Attention equation Attention(Q, K, V) = softmax((Q * K^T) / sqrt(d_k)) * V. Why is the square root of dimension d_k critical as a scaling factor?',
        keywords: ['scaled dot product', 'attention', 'softmax', 'scaling factor', 'vanishing gradient', 'transformer'],
        exemplar: 'Without scaling, for large vector dimensions `d_k`, the dot product `Q * K^T` grows large in magnitude. When input into the Softmax function, large values push Softmax into regions with extremely small gradients (vanishing gradients), halting model learning. Dividing by `sqrt(d_k)` stabilizes the variance of the dot products to 1, ensuring healthy backpropagation gradients.'
      },
      {
        id: 'ai-f2',
        category: 'Problem Solving',
        difficulty: 'Fundamental',
        question: 'What is the role of Temperature, Top-p (Nucleus Sampling), and Top-k in controlling LLM generation, and what settings do you use for factual extraction vs creative generation?',
        keywords: ['temperature', 'top-p', 'top-k', 'nucleus sampling', 'determinism', 'hallucination'],
        exemplar: 'Temperature scales the logits before Softmax; low temperature (<0.2) steepens probability peaks, producing deterministic factual responses, while high temperature (>0.8) flattens probabilities for creative variance. Top-k limits choices to the top k tokens. Top-p (Nucleus) samples from the smallest set of tokens whose cumulative probability exceeds p. For factual extraction/RAG, I set Temperature=0.0 and Top-p=1.0. For conversational agents, Temperature=0.7 and Top-p=0.9.'
      }
    ]
  },
  'mern stack developer': {
    coreSkills: ['MongoDB', 'Express', 'React', 'Node.js', 'JavaScript', 'REST API', 'Git', 'Redux', 'WebSocket', 'JWT', 'Tailwind'],
    salaryAvg: '₹6,00,000 - ₹16,00,000',
    careerPaths: [
      {
        path: 'Full Stack JavaScript Architect',
        y1: 'Advanced React patterns, Express microservices, MongoDB aggregation pipelines, Redis caching',
        y2: 'WebSocket clustering with Redis adapter, Docker containerization, Kubernetes orchestration',
        y3: 'Principal Full Stack Architect'
      },
      {
        path: 'Engineering Management & Technical Lead',
        y1: 'Code architecture reviews, CI/CD pipeline automation, Agile sprint planning',
        y2: 'Managing squad of 8-12 full stack developers, SLA ownership',
        y3: 'VP of Engineering'
      }
    ],
    interviewBank: [
      {
        id: 'mern-h1',
        category: 'Technical',
        difficulty: 'Hard',
        question: 'In a real-time collaborative application built on the MERN stack handling 25,000 active WebSocket connections, how do you architect horizontal scaling using Node.js clustering, Socket.io Redis Streams Adapter, and MongoDB Change Streams without race conditions or duplicate broadcast events?',
        keywords: ['mern', 'websocket', 'socket.io', 'redis streams adapter', 'change streams', 'clustering', 'horizontal scaling', 'race condition'],
        exemplar: 'A single Node.js process cannot manage 25,000 open socket connections due to single-threaded event loop saturation and OS file descriptor limits. I cluster Node across multiple containers behind an AWS ALB with sticky sessions enabled for WebSocket upgrades. I integrate the `@socket.io/redis-streams-adapter` so events emitted on one server instance are reliably routed across all instances via Redis Pub/Sub without duplicate delivery. For database reactivity, I listen to MongoDB Change Streams on replica sets using an isolated worker service that publishes delta updates to Redis.'
      },
      {
        id: 'mern-h2',
        category: 'Problem Solving',
        difficulty: 'Hard',
        question: 'A complex MongoDB aggregation pipeline utilizing multiple $lookup, $unwind, and $facet stages crashes in production with "QueryExceededMemoryLimitNoDiskUseAllowed: exceeded memory limit of 100MB". Walk through how you rewrite the pipeline with foreign collection indexing, pipeline stage reordering, and projection pushing.',
        keywords: ['mongodb aggregation', '$lookup', '$facet', '$unwind', '100mb limit', 'pipeline optimization', 'indexes', 'allowdiskuse'],
        exemplar: 'MongoDB enforces a 100MB RAM limit on in-memory aggregation stages. First, I ensure foreign keys in `$lookup` target collections possess compound indexes to eliminate collection scans. Second, I move `$match` and `$project` stages to the very start of the pipeline before any `$lookup`, stripping away 90% of documents and unnecessary fields early. Third, I replace expensive `$facet` multi-aggregation blocks with targeted independent queries or use `allowDiskUse: true` as an interim safety net for heavy analytical batch reports.'
      },
      {
        id: 'mern-h3',
        category: 'Technical',
        difficulty: 'Hard',
        question: 'How do you implement atomic multi-document transactions across multiple MongoDB collections with replica sets, handling transient transaction errors, write conflicts, and graceful rollback in Node.js?',
        keywords: ['mongodb transaction', 'session', 'starttransaction', 'committransaction', 'transient transaction error', 'write conflict', 'acid'],
        exemplar: 'I create a client session using `const session = client.startSession()`. I wrap the operations inside `session.withTransaction(async () => { ... })`. This helper automatically handles `TransientTransactionError` and `UnknownTransactionCommitResult` by executing automatic retries under concurrent write conflicts. Inside the callback, every Mongoose query explicitly passes `{ session }`. If an unhandled error is thrown, MongoDB rolls back all collection mutations atomically.'
      },
      {
        id: 'mern-m1',
        category: 'Technical',
        difficulty: 'Medium',
        question: 'How do you secure a MERN stack application against NoSQL Injection, Stored Cross-Site Scripting (XSS), and Cross-Site Request Forgery (CSRF)? Detail your authentication and sanitization architecture.',
        keywords: ['nosql injection', 'xss', 'csrf', 'httponly cookie', 'express-mongo-sanitize', 'helmet', 'cors', 'jwt'],
        exemplar: 'I use `express-mongo-sanitize` to strip out dangerous `$` and `.` operators from `req.body`, preventing NoSQL injection where attackers bypass password checks via `{ "$gt": "" }`. For authentication, I store JWT access tokens in short-lived memory and refresh tokens in `HttpOnly`, `Secure`, `SameSite=Strict` cookies, preventing JavaScript XSS access. I apply `helmet` for secure HTTP headers, configure strict CORS whitelisting, and use DOMPurify on any user-rendered rich text.'
      },
      {
        id: 'mern-m2',
        category: 'Problem Solving',
        difficulty: 'Medium',
        question: 'How do you implement optimistic UI updates in React with TanStack Query (React Query) while synchronizing with an Express REST backend and handling rollback on network errors?',
        keywords: ['optimistic update', 'tanstack query', 'onmutate', 'onerror', 'onsettled', 'rollback', 'cache invalidation'],
        exemplar: 'In the `useMutation` hook: (1) `onMutate`: cancel outgoing refetches with `queryClient.cancelQueries()`, snapshot the previous cache state, and immediately update the local query cache with the optimistic data. (2) `onError`: restore the previous cache state using the snapshot context to roll back the UI seamlessly if the API call fails. (3) `onSettled`: call `queryClient.invalidateQueries()` to synchronize the client cache with authoritative server state.'
      },
      {
        id: 'mern-m3',
        category: 'Behavioral',
        difficulty: 'Medium',
        question: 'Describe a scenario where slow re-renders in a deeply nested React component hierarchy caused noticeable typing lag or stutter in a MERN app. How did you diagnose and eliminate the re-render cascades?',
        keywords: ['react devtools profiler', 're-renders', 'usememo', 'usecallback', 'state colocation', 'memo', 'context splitting'],
        exemplar: 'In a large form dashboard, typing in a text field re-rendered hundreds of child items. I recorded a session using React DevTools Profiler, which showed the root Context provider re-rendering on every keystroke. I split the context into two: a static DispatchContext and a dynamic StateContext. I colocated local form state down to individual field components and wrapped expensive sub-components with `React.memo` and `useCallback` for event handlers, bringing keystroke frame latency from 95ms down to 8ms.'
      },
      {
        id: 'mern-f1',
        category: 'Technical',
        difficulty: 'Fundamental',
        question: 'Explain the phases of the Node.js Event Loop (Timers, Pending Callbacks, Poll, Check/setImmediate, Close) and how microtasks (process.nextTick and Promise.then) are prioritized.',
        keywords: ['event loop', 'libuv', 'microtasks', 'process.nexttick', 'promise', 'setimmediate', 'timers'],
        exemplar: 'The libuv event loop processes operations through distinct phases: Timers (executes `setTimeout`), Pending Callbacks (I/O errors), Poll (retrieves new I/O events), Check (`setImmediate`), and Close Callbacks. Crucially, the Microtask Queue (`process.nextTick` followed by Promise callbacks) is drained immediately after each individual operation finishes, before the event loop advances to the next phase.'
      },
      {
        id: 'mern-f2',
        category: 'Problem Solving',
        difficulty: 'Fundamental',
        question: 'When should you embed sub-documents in MongoDB versus creating a referenced relationship with ObjectId, and how does this decision impact the 16MB document size limit?',
        keywords: ['embedding', 'referencing', '16mb limit', 'normalization', 'denormalization', 'one-to-many'],
        exemplar: 'I embed data when relationships are 1-to-Few (e.g., a user having 2-3 addresses) and data is consistently queried together in a single read. I use referencing (`ObjectId` with `$lookup` or separate queries) when relationships are 1-to-Many or unbounded (e.g., millions of log entries or comments per post), preventing the document from approaching MongoDB’s strict 16MB BSON document size limit.'
      }
    ]
  },
  'business development executive (bde)': {
    coreSkills: ['Business Development', 'Lead Generation', 'B2B Sales', 'Client Acquisition', 'Pitching', 'Sales Strategy', 'MEDDICC', 'Contract Negotiation', 'Pipeline Management'],
    salaryAvg: '₹4,50,000 - ₹12,00,000',
    careerPaths: [
      {
        path: 'Enterprise Sales Director & Strategic Accounts',
        y1: 'Master MEDDICC sales qualification, B2B outbound prospecting, and enterprise pitch presentations',
        y2: 'Enterprise deal closing, multi-year SLA negotiations, client account expansion',
        y3: 'Director of Business Development / Chief Commercial Officer (CCO)'
      },
      {
        path: 'Strategic Partnerships & Alliances',
        y1: 'Channel partner acquisition, joint go-to-market strategies, reseller agreements',
        y2: 'Managing corporate ecosystem alliances and revenue-share programs',
        y3: 'Head of Global Strategic Partnerships'
      }
    ],
    interviewBank: [
      {
        id: 'bde-h1',
        category: 'Problem Solving',
        difficulty: 'Hard',
        question: 'You are in final contract negotiations for a ₹60 Lakh annual enterprise contract. The prospect’s Procurement Director issues an ultimatum: "Grant us an immediate 30% price reduction or we are signing with your competitor by end-of-day." How do you protect company profit margins, re-anchor on business value, and structure a win-win compromise without discounting your rate card?',
        keywords: ['procurement', 'negotiation', 'defend margins', 'value re-anchor', 'trade-offs', 'contract scope', 'payment terms', 'win-win'],
        exemplar: 'Never accept a price cut without altering scope. I respond calmly: "I respect that budget parameters are rigid on your end. However, our proposed pricing is tied directly to the guaranteed SLA and dedicated engineering support that protects your ₹2 Crore quarterly transaction volume. If we need to reach that budget ceiling, let’s explore adjusting contract scope—such as moving from 24/7 dedicated support to standard business hours, or committing to a 2-year term with upfront annual billing." This holds the value line while giving them control.'
      },
      {
        id: 'bde-h2',
        category: 'Technical',
        difficulty: 'Hard',
        question: 'Walk me through how you implement the MEDDICC enterprise sales qualification framework (Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion, Competition) on a complex 6-month sales cycle.',
        keywords: ['meddicc', 'economic buyer', 'champion', 'decision criteria', 'decision process', 'identify pain', 'metrics', 'pipeline velocity'],
        exemplar: 'I use MEDDICC to qualify opportunities ruthlessly: (1) Metrics: Quantify the client’s financial pain (e.g., saving 15 hours/week per engineer = ₹40L annual savings). (2) Economic Buyer: Ensure direct engagement with the P&L owner who holds final budget release authority. (3) Decision Criteria & Process: Clarify technical, legal, and procurement milestones and timelines. (4) Identify Pain: Focus on root operational bottlenecks rather than surface symptoms. (5) Champion: Cultivate an internal advocate who has personal skin in the game. (6) Competition: Differentiate based on unique strengths.'
      },
      {
        id: 'bde-h3',
        category: 'Behavioral',
        difficulty: 'Hard',
        question: 'Describe an enterprise deal where you lost after investing 4 months of executive presentations and POC demos. What was the post-mortem analysis, what early warning signs did you overlook, and what changes did you institute in your sales cadence?',
        keywords: ['lost deal', 'post-mortem', 'warning signs', 'single-threaded', 'champion vs coach', 'qualification', 'pipeline hygiene'],
        exemplar: 'We lost a major contract because I was "single-threaded"—relying solely on an enthusiastic Director who turned out to be an internal coach rather than an authorized Economic Buyer. When the VP of Technology vetoed the decision, our deal collapsed. In my post-mortem, I instituted a mandatory "Multi-Threading Rule" across our BDE team: no enterprise deal is marked Qualified in CRM unless at least three distinct stakeholders (Technical Lead, Economic Buyer, and Procurement) have had confirmed discovery calls.'
      },
      {
        id: 'bde-m1',
        category: 'Problem Solving',
        difficulty: 'Medium',
        question: 'You are assigned a new geographic territory with zero existing brand recognition. How do you build a qualified ₹1.5 Crore sales pipeline within your first 90 days?',
        keywords: ['territory planning', 'ideal customer profile', 'icp', 'pipeline generation', 'cold outreach', '90-day plan', 'account-based marketing'],
        exemplar: 'Days 1-30: Build an Ideal Customer Profile (ICP) list of 200 high-fit accounts in the territory using LinkedIn Sales Navigator and industry databases. Days 31-60: Launch a multi-touch Account-Based Marketing (ABM) cadence (personalized video pitches, LinkedIn social selling, executive outreach) to book 25 discovery calls. Days 61-90: Advance qualified leads into structured demos and POCs, building a qualified pipeline of at least 3-4x our target quota.'
      },
      {
        id: 'bde-m2',
        category: 'Technical',
        difficulty: 'Medium',
        question: 'How do you calculate and interpret Customer Acquisition Cost (CAC), Customer Lifetime Value (LTV), Sales Velocity, and LTV:CAC ratio? Why is an LTV:CAC ratio under 3:1 concerning in enterprise B2B sales?',
        keywords: ['cac', 'ltv', 'ltv:cac ratio', 'sales velocity', 'pipeline velocity', 'unit economics', 'churn'],
        exemplar: '`CAC = Total Sales & Marketing Spend / Number of Customers Acquired`. `LTV = Average Annual Contract Value * Gross Margin / Annual Churn Rate`. An LTV:CAC ratio below 3:1 means customer acquisition costs are eating up too much margin, leaving insufficient capital for R&D and operations. A healthy enterprise benchmark is 4:1 or higher.'
      },
      {
        id: 'bde-m3',
        category: 'Behavioral',
        difficulty: 'Medium',
        question: 'How do you handle a prospect who abruptly cancels a contract signing meeting at the 11th hour and goes completely dark across email and phone?',
        keywords: ['prospect went dark', 're-engage', 'breakup email', 'pattern interrupt', 'empathy', 'pipeline velocity'],
        exemplar: 'I do not send desperate "just checking in" emails. Instead, I send a short value-oriented re-engagement: "Hi [Name], I know unexpected priorities arise. Usually when communication pauses at this stage, it means either priorities have shifted or you’ve decided to go in another direction—either of which is completely fine. Should I close your project file for this quarter?" This low-pressure "breakup" email has an 80%+ response rate.'
      },
      {
        id: 'bde-f1',
        category: 'Technical',
        difficulty: 'Fundamental',
        question: 'What is the operational distinction between Marketing Qualified Leads (MQL) and Sales Qualified Leads (SQL), and what SLA criteria should govern the handoff between marketing and sales?',
        keywords: ['mql', 'sql', 'sla', 'lead handoff', 'qualification criteria', 'lead scoring'],
        exemplar: 'An MQL is a lead that has demonstrated initial engagement (e.g., downloaded a whitepaper or attended a webinar) meeting demographic fit. An SQL is a lead vetted by the sales team that has verified budget, a defined timeline, and an identified decision-maker. The marketing-to-sales SLA requires sales to initiate contact within 2 hours of MQL qualification.'
      },
      {
        id: 'bde-f2',
        category: 'Problem Solving',
        difficulty: 'Fundamental',
        question: 'How do you structure an executive cold email or LinkedIn InMail to achieve a 25%+ open rate and a 10%+ response rate from C-suite leaders?',
        keywords: ['cold email', 'subject line', 'personalization', 'brevity', 'call to action', 'social proof'],
        exemplar: 'I keep emails under 100 words in 4 parts: (1) Personalized observation regarding their recent company milestone or hiring initiative. (2) Problem statement addressing a relevant industry pain point. (3) Concrete social proof with a metric (e.g., "We helped [Peer Company] reduce onboarding cycle by 35%"). (4) Low-friction, interest-based Call to Action: "Worth exploring for 10 minutes next Tuesday?"'
      }
    ]
  },
  'digital marketing executive': {
    coreSkills: ['Digital Marketing', 'SEO', 'SEM', 'Social Media', 'Google Ads', 'Content Marketing', 'Analytics', 'GA4', 'Meta Ads', 'Conversion Rate Optimization'],
    salaryAvg: '₹4,00,000 - ₹10,00,000',
    careerPaths: [
      {
        path: 'Performance Marketing Lead & Growth Architect',
        y1: 'Paid Search (Google Ads), Paid Social (Meta/LinkedIn), Conversion tracking (GA4/Server-side CAPI)',
        y2: 'Multi-touch attribution modeling, Conversion Rate Optimization (CRO), Budget scaling',
        y3: 'Head of Growth Marketing / VP of Digital Marketing'
      },
      {
        path: 'Organic Growth & Technical SEO Specialist',
        y1: 'Technical SEO audits, Programmatic SEO clusters, Core Web Vitals optimization, Content strategy',
        y2: 'Enterprise international SEO, Backlink acquisition frameworks, Topical authority building',
        y3: 'Director of Organic Search'
      }
    ],
    interviewBank: [
      {
        id: 'dm-h1',
        category: 'Technical',
        difficulty: 'Hard',
        question: 'Following Google Core Algorithm Updates and browser cookie deprecation (Apple ATT and Chrome Privacy Sandbox), your paid media ROAS drops from 4.5x to 1.8x. How do you implement Server-Side Tracking (Meta Conversions API & GA4 Measurement Protocol) and build multi-touch attribution models to restore data accuracy?',
        keywords: ['roas', 'server-side tracking', 'meta conversions api', 'capi', 'ga4 measurement protocol', 'first-party data', 'attribution modeling', 'privacy sandbox'],
        exemplar: 'Browser-side pixel tracking loses 20-35% of conversion events due to ad blockers and Safari ITP restrictions. I deploy server-side Google Tag Manager (sGTM) hosted on AWS/GCP with a custom first-party subdomain. User interactions send events server-to-server to Meta Conversions API (CAPI) and GA4 Measurement Protocol with event deduplication using matching `event_id` keys. For attribution, I replace flawed Last-Click models with GA4 Data-Driven Attribution and run incrementality lift tests.'
      },
      {
        id: 'dm-h2',
        category: 'Problem Solving',
        difficulty: 'Hard',
        question: 'How do you architect an enterprise Programmatic SEO campaign targeting 3,000 high-intent localized search terms without triggering Google Helpful Content Algorithm penalties or duplicate content de-indexing?',
        keywords: ['programmatic seo', 'topical authority', 'helpful content update', 'thin content', 'crawl budget', 'internal linking', 'canonical tags'],
        exemplar: 'To avoid thin content penalties, I ensure every programmatic page offers unique, first-party data (e.g., proprietary salary benchmarks, regional pricing calculators, and verified user reviews) rather than generic spun text. I structure pages under hierarchical topic clusters with breadcrumbs and automated internal linking. I submit clean XML sitemaps, monitor Google Search Console for crawl budget allocation, and use self-referencing canonical tags to prevent index cannibalization.'
      },
      {
        id: 'dm-h3',
        category: 'Technical',
        difficulty: 'Hard',
        question: 'In Google Ads Performance Max (pMax) campaigns, how do you prevent budget cannibalization with standard Search campaigns, and how do you utilize Account-Level Negative Keywords and Value-Based Bidding (tROAS)?',
        keywords: ['performance max', 'pmax', 'brand cannibalization', 'negative keywords', 'value-based bidding', 'troas', 'audience signals'],
        exemplar: 'pMax campaigns default to bidding on branded terms, inflating perceived ROAS while cannibalizing standard brand search campaigns. I request Google Support to apply an Account-Level Brand Negative list to the pMax campaign, forcing pMax to prospect purely incremental non-brand traffic. I supply high-intent First-Party Customer Match audience signals and configure Value-Based Bidding (`Maximize Conversion Value with target ROAS`) using weighted conversion values based on customer LTV.'
      },
      {
        id: 'dm-m1',
        category: 'Technical',
        difficulty: 'Medium',
        question: 'Compare First-Click, Last-Click, Linear, and Data-Driven Attribution models in GA4. Which model do you recommend for high-consideration B2B products with a 60-day buyer journey and why?',
        keywords: ['data-driven attribution', 'first-click', 'last-click', 'ga4', 'touchpoints', 'b2b buyer journey', 'budget allocation'],
        exemplar: 'Last-Click attribution erroneously assigns 100% credit to the final channel (often Direct or Branded Search), starving top-of-funnel channels (Paid Social, Content) of credit. First-Click does the opposite. In GA4, Data-Driven Attribution (DDA) uses fractional machine learning algorithms to evaluate all touchpoints across converting and non-converting paths. For a 60-day B2B cycle, DDA is mandatory because it measures how top-of-funnel awareness interacts with middle-of-funnel retargeting to drive the sale.'
      },
      {
        id: 'dm-m2',
        category: 'Problem Solving',
        difficulty: 'Medium',
        question: 'A key landing page has an 82% bounce rate and a 1.1% conversion rate on mobile paid traffic. Walk through your systematic CRO audit: using session recordings, heatmaps, Core Web Vitals, and A/B testing hypotheses to lift conversion above 3.5%.',
        keywords: ['conversion rate optimization', 'cro', 'bounce rate', 'heatmaps', 'clarity', 'a/b testing', 'core web vitals', 'mobile ux'],
        exemplar: 'I conduct an audit in three stages: (1) Technical: Inspect PageSpeed Insights; slow Largest Contentful Paint (>4s on 4G) causes immediate mobile abandonment. I compress images to WebP and defer non-critical scripts. (2) Behavioral: Analyze Hotjar/Clarity heatmaps and session recordings to identify rage clicks and where users drop off above the fold. (3) Experimentation: Formulate a hypothesis and run an A/B test with a simplified single-column form, persistent sticky CTA button, and prominent social proof badges.'
      },
      {
        id: 'dm-m3',
        category: 'Behavioral',
        difficulty: 'Medium',
        question: 'Describe an ad campaign where 35% of your monthly marketing budget was spent within 48 hours without delivering target leads due to broad match keyword expansion. How did you react, mitigate the loss, and prevent recurrence?',
        keywords: ['budget pacing', 'broad match', 'search terms report', 'negative keywords', 'automated rules', 'incident mitigation'],
        exemplar: 'I immediately paused the runaway campaign, reviewed the Google Search Terms report, and discovered broad match was bidding aggressively on irrelevant informational queries. I added 180 negative keywords, shifted keywords to Exact and Phrase Match with strict bidding caps, and set up automated Google Ads rules that pause ad groups if daily budget exceeds 120% without conversions. I communicated the root cause transparently to management and recouped the loss over the subsequent three weeks.'
      },
      {
        id: 'dm-f1',
        category: 'Technical',
        difficulty: 'Fundamental',
        question: 'Explain Technical SEO fundamentals: Canonical tags, Robots.txt directives, XML sitemaps, 301 vs 302 redirects, and their impact on search engine crawl budgets.',
        keywords: ['technical seo', 'canonical', 'robots.txt', 'sitemap', '301 redirect', 'crawl budget', 'indexation'],
        exemplar: '`Robots.txt` tells search crawlers which URL paths they should not crawl to preserve crawl budget. An `XML Sitemap` lists authoritative URLs intended for indexing. A `Canonical Tag` (`rel="canonical"`) declares the master version among duplicate pages. A `301 Redirect` signifies a permanent relocation passing 99% of page equity (PageRank), while a `302 Redirect` is temporary and preserves the original URL index.'
      },
      {
        id: 'dm-f2',
        category: 'Problem Solving',
        difficulty: 'Fundamental',
        question: 'What are the formulas and benchmark targets for Click-Through Rate (CTR), Cost Per Click (CPC), Cost Per Acquisition (CPA), and Return on Ad Spend (ROAS)?',
        keywords: ['ctr', 'cpc', 'cpa', 'roas', 'formula', 'marketing kpis', 'benchmarks'],
        exemplar: '`CTR = (Clicks / Impressions) * 100`. `CPC = Total Ad Spend / Total Clicks`. `CPA = Total Ad Spend / Total Conversions`. `ROAS = (Revenue Generated / Ad Spend) * 100`. Healthy benchmarks vary by industry: Search CTR typically averages 3-5%, and healthy e-commerce/SaaS campaigns target a minimum ROAS of 300-400% (3x - 4x).'
      }
    ]
  },
  'frontend developer': {
    coreSkills: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind', 'Redux', 'Next.js', 'Git', 'Performance Optimization'],
    salaryAvg: '₹6,00,000 - ₹15,00,000',
    careerPaths: [
      {
        path: 'Technical Specialist (Frontend Architect)',
        y1: 'Master Web Performance, Micro-frontends, WebGL, Design Systems, React 19 Concurrent Features',
        y2: 'Architect scalable frontend systems, lead technical design RFCs',
        y3: 'Principal Frontend Architect & Staff Engineer'
      },
      {
        path: 'Full-Stack Expansion (Full-Stack Lead)',
        y1: 'Learn Node.js, Express, PostgreSQL, Prisma, System Architecture',
        y2: 'End-to-end service delivery, API design, DevOps pipelines',
        y3: 'Head of Engineering / Technical Lead'
      }
    ],
    interviewBank: [
      {
        id: 'fe-h1',
        category: 'Technical',
        difficulty: 'Hard',
        question: 'A React 19 / Next.js enterprise analytics dashboard renders 50,000 real-time updating data points streamed via WebSockets. The UI is freezing and suffering from frame drops below 15 FPS. Walk through how you diagnose Long Tasks in Chrome DevTools Performance Profiler, leverage React Concurrent features (useDeferredValue, startTransition), and implement canvas/DOM virtualization.',
        keywords: ['react 19', 'concurrent react', 'usedeferredvalue', 'starttransition', 'virtualization', 'long tasks', 'frame rate', 'performance profiler'],
        exemplar: 'I record a profile in Chrome DevTools to locate Long Tasks (>50ms) blocking the main thread. I decouple high-frequency WebSocket updates from the rendering loop by batching incoming messages using `requestAnimationFrame`. For non-urgent UI updates (like charts or filtered lists), I wrap state setters in `startTransition` and apply `useDeferredValue` so user typing and clicks retain top priority without stutter. To eliminate DOM bloat from 50,000 elements, I implement DOM windowing via `tanstack-virtual`, keeping only visible items rendered in the DOM.'
      },
      {
        id: 'fe-h2',
        category: 'Problem Solving',
        difficulty: 'Hard',
        question: 'How do you design an enterprise Micro-Frontend architecture using Webpack 5 Module Federation or Vite Module Federation, handling shared state, dependency version mismatches (e.g., dual React runtimes), and independent CI/CD deployments?',
        keywords: ['micro-frontends', 'module federation', 'shared dependencies', 'singleton', 'version mismatch', 'independent deploy', 'routing'],
        exemplar: 'I use Webpack 5 Module Federation configured with a Host container and multiple Remote applications. In `ModuleFederationPlugin`, I declare `react` and `react-dom` as singletons (`singleton: true, requiredVersion: deps.react, strictVersion: true`) to strictly prevent dual runtime instances from crashing React Context and Hooks. For cross-app state, I implement a lightweight Event Bus on custom browser events or a shared Redux store initialized in the Host container. Each micro-frontend maintains its own independent CI/CD pipeline and S3/CDN deployment bucket.'
      },
      {
        id: 'fe-h3',
        category: 'Technical',
        difficulty: 'Hard',
        question: 'Explain how the React Fiber reconciliation algorithm works under the hood: Fiber nodes, the work loop, alternate trees, priority lanes (SyncLane, InputContinuousLane, DefaultLane), and how interruptible rendering solves the legacy stack reconciler UI blocking problem.',
        keywords: ['fiber', 'work loop', 'priority lanes', 'reconciliation', 'alternate tree', 'interruptible rendering', 'stack reconciler', 'time slicing'],
        exemplar: 'Legacy React used a recursive Stack Reconciler that could not be paused once started. Fiber represents the component tree as a linked list of Fiber nodes (child, sibling, return pointers). Rendering is split into two phases: Render phase (asynchronous and interruptible) and Commit phase (synchronous DOM mutations). Fiber uses priority lanes: user inputs (SyncLane) can interrupt ongoing background rendering (DefaultLane). Using Time Slicing, Fiber yields back to the browser event loop every 5ms to maintain smooth 60 FPS animations.'
      },
      {
        id: 'fe-m1',
        category: 'Technical',
        difficulty: 'Medium',
        question: 'How do you optimize Core Web Vitals (Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift) on an e-commerce website?',
        keywords: ['core web vitals', 'lcp', 'inp', 'cls', 'critical css', 'font-display', 'next/image', 'main thread blocking'],
        exemplar: 'For LCP: Preload the hero image with `<link rel="preload">`, use modern WebP/AVIF formats with `next/image`, and deploy assets on a global edge CDN. For INP: Break up long JavaScript tasks, defer non-critical third-party analytics scripts, and avoid synchronous state updates in click handlers. For CLS: Define explicit `width` and `height` (or `aspect-ratio`) attributes on all media elements, reserve space for dynamic ads with skeleton containers, and use `font-display: swap`.'
      },
      {
        id: 'fe-m2',
        category: 'Problem Solving',
        difficulty: 'Medium',
        question: 'How do you architect an offline-first progressive web application (PWA) using Service Workers (Workbox), CacheStorage, and IndexedDB background sync for offline form submissions?',
        keywords: ['service worker', 'workbox', 'offline-first', 'indexeddb', 'background sync', 'cachestorage', 'stale-while-revalidate'],
        exemplar: 'I use Workbox to configure caching strategies: Cache-First for static font and image assets, and Stale-While-Revalidate for JS bundles and navigation routes. When a user submits a form while offline, the service worker intercepts the failed request, serializes the payload into IndexedDB, and registers a Background Sync event. When network connectivity is restored, the browser wakes the Service Worker to replay the stored IndexedDB requests silently and notifies the user.'
      },
      {
        id: 'fe-m3',
        category: 'Behavioral',
        difficulty: 'Medium',
        question: 'Tell me about a time when you had to refactor a massive, unmaintainable legacy JavaScript codebase into modern TypeScript and clean state management without disrupting ongoing product feature releases.',
        keywords: ['typescript migration', 'refactoring', 'technical debt', 'feature flags', 'delivery velocity', 'regression testing'],
        exemplar: 'Our core app had 40,000 lines of untyped JS with frequent runtime `Cannot read property of undefined` crashes. I instituted an incremental migration strategy: enabled TypeScript in loose mode, added strict types to shared domain models first, and mandated that all new PRs must be written in TypeScript. We created automated Cypress regression suites for critical checkout flows and wrapped legacy modules in feature flags, completing the migration over two quarters with zero production regressions.'
      },
      {
        id: 'fe-f1',
        category: 'Technical',
        difficulty: 'Fundamental',
        question: 'Explain the JavaScript browser Event Loop: Call Stack, Web APIs, Microtask Queue (Promises, queueMicrotask), and Macrotask Queue (setTimeout, setImmediate, I/O), and their exact execution order.',
        keywords: ['event loop', 'call stack', 'microtask', 'macrotask', 'promises', 'execution order', 'rendering cycle'],
        exemplar: 'The Call Stack executes synchronous code. Asynchronous operations register with browser Web APIs. When complete, callbacks enter queues: Microtasks (Promises, `queueMicrotask`, MutationObserver) or Macrotasks (`setTimeout`, `setInterval`, I/O). The Event Loop prioritizes: whenever the Call Stack is empty, it drains the ENTIRE Microtask queue before executing even a single Macrotask. The browser UI rendering step occurs after the microtask queue is fully cleared.'
      },
      {
        id: 'fe-f2',
        category: 'Problem Solving',
        difficulty: 'Fundamental',
        question: 'What is the Virtual DOM in React, how does key prop diffing work, and why should you never use array index as a key for dynamic lists?',
        keywords: ['virtual dom', 'key prop', 'diffing algorithm', 'reconciliation', 'array index key', 'component state'],
        exemplar: 'The Virtual DOM is an in-memory representation of the real DOM tree. React uses the `key` prop to identify which items have changed, been added, or removed. If you use array indices as keys when items are re-ordered or deleted, the keys shift, causing React to mismatch component internal states, resulting in visual bugs and wasted re-renders. Keys must always be stable and unique (such as database item IDs).'
      }
    ]
  },
  'backend developer': {
    coreSkills: ['Node.js', 'Express', 'Java', 'Spring Boot', 'Python', 'SQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'REST API', 'Microservices'],
    salaryAvg: '₹7,00,000 - ₹18,00,000',
    careerPaths: [
      {
        path: 'Distributed Systems Architect',
        y1: 'Deep dive into Kafka, gRPC, Event-driven architecture, Kubernetes',
        y2: 'High-throughput fault-tolerant system design, Distributed Transactions',
        y3: 'Chief Architect / VP of Cloud Architecture'
      },
      {
        path: 'Engineering Management & Infrastructure',
        y1: 'Service reliability SLAs, microservice decomposition, security governance',
        y2: 'Engineering Manager (Backend & Infrastructure)',
        y3: 'VP of Engineering'
      }
    ],
    interviewBank: [
      {
        id: 'be-h1',
        category: 'Technical',
        difficulty: 'Hard',
        question: 'In an event-driven architecture processing financial ledger transactions, how do you solve the Distributed Dual-Write problem (synchronizing database commits with Kafka message publishes) using the Transactional Outbox Pattern, Change Data Capture (Debezium), and Idempotency, avoiding Two-Phase Commit (2PC) bottlenecks?',
        keywords: ['transactional outbox', 'cdc', 'debezium', 'kafka', 'dual-write', 'distributed transaction', 'idempotency', '2pc'],
        exemplar: 'Writing to a database and publishing to Kafka in the same HTTP request is inherently prone to partial failures (Dual-Write problem). I implement the Transactional Outbox Pattern: inside the same ACID database transaction, we write the domain entity and an outbox event record to an `outbox` table. Debezium reads the database write-ahead log (WAL) via Change Data Capture (CDC) and streams events to Kafka with at-least-once delivery. On the consumer side, we enforce strict idempotency by recording consumed message UUIDs in an idempotent event store.'
      },
      {
        id: 'be-h2',
        category: 'Problem Solving',
        difficulty: 'Hard',
        question: 'How do you prevent Cache Stampede (Thundering Herd problem) and Cache Penetration under 100,000 concurrent requests when a hot Redis cache key expires? Compare Probabilistic Early Expiration (XFetch), Distributed Locks (Redlock), and Singleflight mechanisms.',
        keywords: ['cache stampede', 'thundering herd', 'cache penetration', 'xfetch', 'redlock', 'singleflight', 'bloom filter', 'redis'],
        exemplar: 'To prevent cache stampede when a hot key expires, I implement Probabilistic Early Expiration (XFetch algorithm) where background worker requests randomly recompute the cache before it actually expires based on compute duration. Alternatively, I use Singleflight (request coalescing) or a Redis distributed lock (`SET key val NX PX 5000`) so only one concurrent request queries the database while other 99,999 requests await the result. For cache penetration (querying non-existent IDs), I implement a Bloom Filter in front of Redis.'
      },
      {
        id: 'be-h3',
        category: 'Technical',
        difficulty: 'Hard',
        question: 'Compare database transaction isolation levels: Read Uncommitted, Read Committed, Repeatable Read, and Serializable. How does Multi-Version Concurrency Control (MVCC) in PostgreSQL implement Snapshot Isolation, and what causes Write Skew anomalies under Repeatable Read?',
        keywords: ['mvcc', 'isolation levels', 'repeatable read', 'serializable', 'write skew', 'phantom read', 'snapshot isolation', 'postgresql'],
        exemplar: 'Read Committed sees only committed data at statement execution time. Repeatable Read guarantees a consistent transaction snapshot across the entire transaction using MVCC transaction IDs (`xmin`/`xmax`). However, Repeatable Read still permits Write Skew: where two concurrent transactions read overlapping data, satisfy constraints independently, and perform non-conflicting writes that violate global integrity (e.g., both doctors on-call check if at least one doctor remains on-call, and both go off-call). Only Serializable isolation prevents write skew via SSI (Serializable Snapshot Isolation).'
      },
      {
        id: 'be-m1',
        category: 'Technical',
        difficulty: 'Medium',
        question: 'How do you design composite B-Tree indexes for multi-column queries in relational databases? Explain the "Leftmost Prefix Rule" and why ordering high-cardinality equality columns before range columns is critical.',
        keywords: ['b-tree', 'composite index', 'leftmost prefix rule', 'cardinality', 'range query', 'index scan'],
        exemplar: 'A composite B-Tree index on `(A, B, C)` can only be used by queries that filter by `A`, or `(A, B)`, or `(A, B, C)`—this is the Leftmost Prefix Rule. Queries filtering only on `B` or `C` cannot leverage the index efficiently. Furthermore, B-Trees can only apply index lookups up to the first range operator (`>`, `<`, `BETWEEN`); subsequent columns in the index cannot be utilized for index filtering. Therefore, high-cardinality exact equality columns must precede range filter columns.'
      },
      {
        id: 'be-m2',
        category: 'Problem Solving',
        difficulty: 'Medium',
        question: 'How do you architect an API Rate Limiter handling 60,000 requests per minute across a distributed backend? Compare Token Bucket, Leaky Bucket, and Sliding Window Counter with Redis and Lua scripts for atomicity.',
        keywords: ['rate limiter', 'token bucket', 'sliding window counter', 'redis', 'lua script', 'atomicity', '429 too many requests'],
        exemplar: 'I use the Sliding Window Counter algorithm implemented in Redis. Using a Redis Sorted Set (ZSET) or sliding window hash, each request is logged with a timestamp score. To guarantee atomicity across distributed servers, I execute the rate-check and prune logic inside a single Redis Lua script (`redis.call("zremrangebyscore", ...)`). This avoids race conditions between reading and writing counters. If count exceeds the limit, the API returns HTTP 429 with `Retry-After` headers.'
      },
      {
        id: 'be-m3',
        category: 'Behavioral',
        difficulty: 'Medium',
        question: 'Describe a production outage caused by connection pool starvation or a cascading microservice failure. How did you stabilize the system, implement circuit breakers, and enforce graceful degradation?',
        keywords: ['incident', 'connection pool', 'cascading failure', 'circuit breaker', 'graceful degradation', 'resilience', 'post-mortem'],
        exemplar: 'During a flash campaign, an unindexed database query held connection pool threads for 8 seconds, quickly starving our HikariCP/pg connection pool and causing cascading timeouts upstream. I immediately doubled the read-replica capacity and throttled non-critical telemetry endpoints. Post-incident, I implemented Circuit Breakers with fallback stubs, set strict 1.5s query timeouts, tuned connection pool maximums, and set alerts on pool wait time percentiles.'
      },
      {
        id: 'be-f1',
        category: 'Technical',
        difficulty: 'Fundamental',
        question: 'Explain REST API architectural principles: HTTP status codes (200, 201, 204, 400, 401, 403, 404, 409, 422, 500), idempotency of GET/PUT/DELETE vs POST, and pagination standards.',
        keywords: ['rest api', 'http status codes', 'idempotency', 'cursor pagination', 'api design'],
        exemplar: 'REST requires statelessness and standard HTTP semantics. Idempotent methods (GET, PUT, DELETE) produce identical server state regardless of how many times executed; POST is not idempotent. 200 OK returns data; 201 Created signals successful resource generation; 204 No Content indicates success with no response payload; 401 indicates unauthenticated; 403 indicates unauthorized; 409 indicates conflict; 422 indicates semantic validation failure. For pagination, Cursor-based pagination (`?cursor=xyz`) outperforms Offset-based pagination on large datasets.'
      },
      {
        id: 'be-f2',
        category: 'Problem Solving',
        difficulty: 'Fundamental',
        question: 'What is the architectural difference between Synchronous communication (REST, gRPC) and Asynchronous communication (Message Queues like RabbitMQ, Kafka), and when should each be used?',
        keywords: ['synchronous', 'asynchronous', 'grpc', 'message queues', 'rabbitmq', 'kafka', 'loose coupling'],
        exemplar: 'Synchronous communication requires the client to wait for the server response (ideal for immediate UI lookups, payment authorizations, and real-time read operations). Asynchronous communication decouples producers from consumers using message queues, enabling backpressure management, background processing (order fulfillment, email notifications), and high fault tolerance.'
      }
    ]
  },
  'java developer': {
    coreSkills: ['Java', 'Spring Boot', 'Hibernate', 'Microservices', 'SQL', 'PostgreSQL', 'Docker', 'Git', 'Kafka', 'JVM Tuning'],
    salaryAvg: '₹7,50,000 - ₹18,00,000',
    careerPaths: [
      {
        path: 'Enterprise Java Architect',
        y1: 'Spring Cloud, Kafka Event Streaming, Kubernetes Deployment, Virtual Threads',
        y2: 'Enterprise JVM Performance Tuning, Microservice Mesh, Distributed Transactions',
        y3: 'Principal Enterprise Architect'
      },
      {
        path: 'Cloud & Distributed Systems Lead',
        y1: 'AWS/GCP Cloud Native Java, Reactive Microservices (WebFlux)',
        y2: 'Architect scalable fault-tolerant payment/fintech engines',
        y3: 'VP of Technology'
      }
    ],
    interviewBank: [
      {
        id: 'java-h1',
        category: 'Technical',
        difficulty: 'Hard',
        question: 'Explain JVM Garbage Collector internals: How does ZGC (Z Garbage Collector) achieve sub-millisecond stop-the-world pause times compared to G1GC? Explain colored pointers, load barriers, and Generational ZGC mechanics across multi-terabyte heaps.',
        keywords: ['jvm', 'zgc', 'g1gc', 'colored pointers', 'load barriers', 'pause time', 'heap memory', 'generational zgc'],
        exemplar: 'G1GC divides the heap into regions and requires multi-millisecond stop-the-world pauses for mark/relocate phases. ZGC performs virtually all marking, relocation, and remap phases concurrently with running application threads. It achieves this using Colored Pointers (storing metadata bits directly in reference address pointers) and Load Barriers (intercepting thread reference reads to dynamically update old pointers to new relocated object addresses). Generational ZGC separates Young and Old objects, maintaining pause times below 1 millisecond even on 16TB heaps.'
      },
      {
        id: 'java-h2',
        category: 'Problem Solving',
        difficulty: 'Hard',
        question: 'How do Java 21 Virtual Threads (Project Loom) differ under the hood from OS Platform Threads? What happens when a virtual thread executes inside a synchronized block (Thread Pinning) or blocks on native JNI I/O, and how do you refactor ReentrantLock to prevent carrier thread exhaustion?',
        keywords: ['virtual threads', 'project loom', 'carrier thread', 'thread pinning', 'synchronized', 'reentrantlock', 'concurrency'],
        exemplar: 'Platform threads are 1:1 mappings to OS kernel threads, costing ~1MB stack memory each. Virtual threads are lightweight user-mode threads managed by the JVM, mounted onto a pool of carrier threads (ForkJoinPool). When a virtual thread blocks on socket I/O, the JVM unmounts it, freeing the carrier thread. However, when entering a `synchronized` block or calling native JNI, the virtual thread is "pinned" to its carrier thread and cannot be unmounted. To resolve pinning, legacy `synchronized` blocks must be replaced with `java.util.concurrent.locks.ReentrantLock`.'
      },
      {
        id: 'java-h3',
        category: 'Technical',
        difficulty: 'Hard',
        question: 'How does Spring Boot manage transaction boundaries and propagation (REQUIRED, REQUIRES_NEW, NESTED) using CGLIB/JDK dynamic proxies? Why does calling a @Transactional method from another method in the SAME class fail to start a new transaction boundary (Self-Invocation Issue)?',
        keywords: ['spring boot', '@transactional', 'propagation', 'self-invocation', 'cglib', 'jdk dynamic proxy', 'aop proxy', 'rollback'],
        exemplar: 'Spring `@Transactional` works via Spring AOP proxies wrapping the bean. When an external caller invokes the method, the proxy intercepts execution to start and commit the transaction. Under self-invocation (calling `methodB()` from `methodA()` within the same class), the call bypasses the proxy and executes on the raw `this` instance, causing transaction annotations on `methodB` to be silently ignored. To fix this, you must extract the transactional method into a separate collaborator bean or inject the bean proxy via self-injection.'
      },
      {
        id: 'java-m1',
        category: 'Technical',
        difficulty: 'Medium',
        question: 'Explain the internal architecture of ConcurrentHashMap in Java 8+: How does it achieve thread-safe operations without locking the entire map like Hashtable or synchronizedMap? Explain CAS, synchronized bucket heads, and TreeBins.',
        keywords: ['concurrenthashmap', 'cas', 'compare-and-swap', 'bucket lock', 'treebin', 'thread safety', 'synchronization'],
        exemplar: 'Java 7 used Segment Locks. Java 8+ eliminated segment locks in favor of fine-grained node-level synchronization: (1) Empty buckets use lock-free Compare-And-Swap (`CAS`) operations to insert the first node. (2) Collisions lock only the head node of that specific hash bucket using `synchronized`, allowing concurrent writes to all other buckets. (3) If bucket chain length exceeds 8, the linked list transforms into a balanced red-black tree (`TreeBin`), guaranteeing O(log N) search performance.'
      },
      {
        id: 'java-m2',
        category: 'Problem Solving',
        difficulty: 'Medium',
        question: 'A production Spring Boot microservice CPU usage spikes to 100% every few hours. Walk through how you capture thread dumps with jcmd / jstack, identify high-CPU threads using "top -H", and diagnose infinite loops or regex catastrophic backtracking.',
        keywords: ['jcmd', 'jstack', 'thread dump', 'top -h', 'cpu spike', 'regex backtracking', 'profiling'],
        exemplar: 'I run `top -H -p <PID>` to identify the specific OS Thread ID consuming 99% CPU. I convert that thread ID to hexadecimal (`printf "%x\n" <TID>`). I capture thread dumps using `jcmd <PID> Thread.print` and search for the matching `nid=0x<HEX_TID>`. The thread dump reveals the exact Java class and line number executing (e.g., an unindexed regex or unescaped while-loop). I deploy a targeted fix and benchmark using JMH.'
      },
      {
        id: 'java-m3',
        category: 'Behavioral',
        difficulty: 'Medium',
        question: 'Describe a production memory leak incident involving unclosed database connection pools or static collections in Java. How did you capture a heap dump and inspect object retention trees in Eclipse MAT?',
        keywords: ['heap dump', 'eclipse mat', 'memory leak', 'hikaricp', 'retained size', 'gc roots', 'out of memory'],
        exemplar: 'Our payment microservice crashed with `OutOfMemoryError: Java heap space`. I captured a heap dump using `jcmd <PID> GC.heap_dump /tmp/heap.hprof`. Opening the dump in Eclipse Memory Analyzer (MAT), the Leak Suspects Report showed that 85% of heap memory was held by a `static ConcurrentHashMap` cache where keys lacked TTL expiration. I refactored the in-memory cache to a bounded Caffeine Cache with weak keys and maximum size limits.'
      },
      {
        id: 'java-f1',
        category: 'Technical',
        difficulty: 'Fundamental',
        question: 'What is the contract between equals() and hashCode() in Java, and what catastrophic bugs occur when an object with a mutable hashCode is used as a key in a HashMap?',
        keywords: ['equals', 'hashcode', 'hashmap', 'contract', 'bucket collision', 'immutability'],
        exemplar: 'The contract dictates: If two objects are equal according to `equals()`, they MUST produce the same `hashCode()`. If `hashCode()` changes after an object is added as a key to a `HashMap`, subsequent `map.get(key)` calls compute the new hash, search the wrong bucket, and fail to find the object, causing memory leaks and unreachable data.'
      },
      {
        id: 'java-f2',
        category: 'Problem Solving',
        difficulty: 'Fundamental',
        question: 'Explain Java Stream API lazy evaluation: What is the difference between Intermediate operations (filter, map, flatMap) and Terminal operations (collect, reduce, forEach)?',
        keywords: ['streams', 'lazy evaluation', 'intermediate', 'terminal', 'pipeline', 'collect'],
        exemplar: 'Intermediate operations return a new Stream and are executed lazily: no processing occurs until a Terminal operation is called. Terminal operations initiate the traversal of the pipeline and produce a result or side-effect. This allows the JVM to fuse operations into a single traversal and optimize short-circuiting operations like `findFirst()`.'
      }
    ]
  },
  'python developer': {
    coreSkills: ['Python', 'Django', 'FastAPI', 'Flask', 'PostgreSQL', 'Redis', 'Docker', 'Celery', 'AsyncIO', 'SQLAlchemy'],
    salaryAvg: '₹6,50,000 - ₹16,00,000',
    careerPaths: [
      {
        path: 'Senior Python & AI Backend Lead',
        y1: 'FastAPI async microservices, Celery distributed tasks, Redis caching',
        y2: 'Vector search (Pinecone/pgvector), LLM pipeline orchestration, AsyncIO mastery',
        y3: 'Head of Python & AI Engineering'
      }
    ],
    interviewBank: [
      {
        id: 'py-h1',
        category: 'Technical',
        difficulty: 'Hard',
        question: 'Explain Python memory management internals: PyMalloc arena/pool/block allocation, reference counting, and the cyclic generational garbage collector (gc0, gc1, gc2). How do circular references in objects with custom __del__ methods lead to uncollectable garbage and memory bloat?',
        keywords: ['pymalloc', 'reference counting', 'cyclic garbage collector', 'generations', 'memory leak', '__del__', 'gc module', 'arenas'],
        exemplar: 'CPython manages small objects (<512 bytes) using PyMalloc (dividing 256KB Arenas into 4KB Pools of uniform size Blocks). Memory cleanup relies primarily on Reference Counting. However, reference counting cannot free cyclic references (e.g., Object A references B, and B references A). To handle this, Python runs a generational cyclic garbage collector across 3 generations. In older Python versions (<3.4), if objects in a cycle defined `__del__`, Python could not determine safe destruction order, placing them in `gc.garbage` and causing uncollectable memory leaks.'
      },
      {
        id: 'py-h2',
        category: 'Problem Solving',
        difficulty: 'Hard',
        question: 'In high-throughput FastAPI services, how does the underlying uvloop / asyncio event loop handle concurrency? What happens if a developer introduces a blocking CPU-heavy calculation or synchronous database driver into an async route handler, and how do you mitigate this using run_in_executor or Celery?',
        keywords: ['fastapi', 'uvloop', 'asyncio', 'event loop', 'blocking io', 'run_in_executor', 'celery', 'concurrency'],
        exemplar: 'FastAPI executes `async def` routes on the main asyncio event loop. If a route runs blocking CPU calculations or a synchronous DB call (`time.sleep` or sync SQLAlchemy), it halts the ENTIRE event loop, freezing all concurrent requests. To fix this: (1) Offload blocking I/O to a thread pool via `loop.run_in_executor(None, blocking_func)`. (2) Define the route as regular `def` (FastAPI automatically runs regular def routes in an external threadpool). (3) For heavy CPU tasks, offload asynchronously to Celery/Redis workers.'
      },
      {
        id: 'py-h3',
        category: 'Technical',
        difficulty: 'Hard',
        question: 'Explain Python Metaclasses (type), class creation lifecycle (__new__ vs __init__), and how ORMs like SQLAlchemy and Pydantic use Descriptors (__get__, __set__) to enforce declarative schema validation at runtime.',
        keywords: ['metaclass', 'type', '__new__', '__init__', 'descriptor', 'sqlalchemy', 'pydantic', 'introspection'],
        exemplar: 'In Python, classes are themselves instances of metaclasses (`type`). During class definition, the metaclass’s `__new__` method inspects class attributes before the class object is instantiated. Pydantic and SQLAlchemy leverage this alongside the Descriptor protocol: defining `__get__` and `__set__` methods on field attributes allows the ORM to intercept every field access, enforce runtime type coercion, and automatically register column mappings.'
      },
      {
        id: 'py-m1',
        category: 'Technical',
        difficulty: 'Medium',
        question: 'How do Python Generators and the Iterator Protocol achieve memory efficiency with large data streams? Explain "yield from" and bidirectional coroutine delegation.',
        keywords: ['generators', 'yield', 'yield from', 'iterator protocol', '__iter__', '__next__', 'memory efficiency', 'lazy evaluation'],
        exemplar: 'An iterator implements `__iter__()` and `__next__()`. Generators use the `yield` keyword to maintain execution state between calls, computing items lazily on-demand rather than loading millions of records into RAM. The `yield from <iterable>` syntax delegates generator execution directly to a sub-generator, establishing a transparent bidirectional communication channel for values and exceptions.'
      },
      {
        id: 'py-m2',
        category: 'Problem Solving',
        difficulty: 'Medium',
        question: 'How do you profile and eliminate performance bottlenecks in Python using cProfile and line_profiler? When should you migrate CPU bottlenecks to NumPy vectorized operations or Cython?',
        keywords: ['cprofile', 'line_profiler', 'numpy', 'vectorization', 'cython', 'bottleneck', 'optimization'],
        exemplar: 'I run `cProfile` to identify functions with high cumulative time, followed by `line_profiler` for line-by-line time breakdowns. If bottlenecks involve numerical loops, I replace pure Python iterations with NumPy vectorized operations (leveraging underlying compiled C SIMD instructions). If arbitrary procedural logic cannot be vectorized, I compile critical inner loops using Cython or PyPy.'
      },
      {
        id: 'py-m3',
        category: 'Behavioral',
        difficulty: 'Medium',
        question: 'Tell me about an asynchronous distributed task pipeline you built with Celery and Redis where tasks were getting duplicated or lost during worker crashes. How did you implement task acknowledgements, exponential backoff retries, and idempotency?',
        keywords: ['celery', 'redis', 'acks_late', 'exponential backoff', 'idempotency', 'dead letter queue', 'distributed tasks'],
        exemplar: 'During worker crashes, Celery tasks were lost because `acks_late=False` acknowledged tasks upon receipt. I configured `acks_late=True` and `reject_on_worker_lost=True` so tasks re-queue if a worker terminates abruptly. To handle network hiccups, I configured Celery retries with exponential backoff and jitter (`autoretry_for=(RequestException,)`). To prevent duplicate side-effects from re-deliveries, every task checked an idempotency key in Redis before execution.'
      },
      {
        id: 'py-f1',
        category: 'Technical',
        difficulty: 'Fundamental',
        question: 'Explain the Global Interpreter Lock (GIL) in Python, how Python 3.13 free-threading (PEP 703) aims to disable it, and when to use multiprocessing vs threading vs asyncio.',
        keywords: ['gil', 'multiprocessing', 'threading', 'asyncio', 'cpu-bound', 'io-bound', 'pep 703'],
        exemplar: 'The GIL is a mutex that prevents multiple native threads from executing Python bytecode simultaneously, preserving CPython reference count thread-safety. For I/O-bound tasks, `threading` or `asyncio` works well because the GIL is released during network/file waits. For CPU-bound tasks, `multiprocessing` bypasses the GIL by spawning independent OS processes with separate memory spaces.'
      },
      {
        id: 'py-f2',
        category: 'Problem Solving',
        difficulty: 'Fundamental',
        question: 'What is the critical danger of using mutable default arguments in Python functions (e.g., def append_to(item, target_list=[])), and what is the idiomatic solution?',
        keywords: ['mutable default argument', 'default parameter', 'python gotcha', 'pass by assignment', 'none check'],
        exemplar: 'In Python, default arguments are evaluated ONCE when the function definition is executed, NOT each time the function is called. If you use a mutable object like `target_list=[]`, all subsequent calls that omit the argument modify and share the exact same list instance in memory. The correct pattern is `def append_to(item, target_list=None): if target_list is None: target_list = []`.'
      }
    ]
  },
  'general tech': {
    coreSkills: ['Problem Solving', 'Data Structures', 'Git', 'Communication', 'Agile', 'Testing', 'SQL', 'Database'],
    salaryAvg: '₹5,00,000 - ₹12,00,000',
    careerPaths: [
      {
        path: 'Senior Software Engineer',
        y1: 'Deepen core domain knowledge and system architecture',
        y2: 'Technical design ownership and code mentorship',
        y3: 'Lead Software Architect'
      }
    ],
    interviewBank: [
      {
        id: 'gen-h1',
        category: 'Technical',
        difficulty: 'Hard',
        question: 'How do you design a highly scalable, fault-tolerant distributed system with 99.99% availability, considering data partitioning, replication, consensus algorithms (Raft/Paxos), and disaster recovery?',
        keywords: ['scalability', 'fault tolerance', 'raft', 'paxos', 'replication', 'partitioning', 'high availability', 'slo'],
        exemplar: 'I structure the architecture into decoupled stateless service tiers backed by distributed databases partitioned with consistent hashing. I implement quorum-based replication and automated health checks to ensure fast failover without split-brain anomalies.'
      },
      {
        id: 'gen-m1',
        category: 'Problem Solving',
        difficulty: 'Medium',
        question: 'Describe how you conduct code reviews to catch race conditions, security vulnerabilities (OWASP Top 10), and maintainability issues before code hits production.',
        keywords: ['code review', 'owasp', 'race condition', 'clean code', 'unit testing', 'static analysis'],
        exemplar: 'I use automated SAST scanners in CI/CD to catch baseline vulnerabilities, then focus manual review on business logic edge cases, concurrency locks, input validation boundaries, and test coverage.'
      },
      {
        id: 'gen-f1',
        category: 'Behavioral',
        difficulty: 'Fundamental',
        question: 'Describe a situation where you had a disagreement with a team member over an architectural decision. How did you resolve it professionally?',
        keywords: ['communication', 'listen', 'data', 'trade-off', 'consensus', 'compromise', 'respect'],
        exemplar: 'When debating between two architectures, we created objective benchmark prototypes evaluating throughput, developer ergonomics, and operational cost. The empirical data showed the best trade-off and achieved team consensus with zero friction.'
      }
    ]
  }
};

/**
 * 1. AI Job Recommendations
 * Matches candidate's skills, experience, and profile against all open jobs.
 */
const getAIJobRecommendations = (candidateProfile, jobs = []) => {
  if (!jobs || jobs.length === 0) return [];

  const candidateSkills = (candidateProfile.skills || []).map(s => s.toLowerCase().trim());
  const candidateText = [
    candidateProfile.title || '',
    candidateProfile.experience || '',
    candidateProfile.summary || '',
    candidateSkills.join(' ')
  ].join(' ').toLowerCase();

  const candidateExpYears = parseFloat(candidateProfile.experienceYears || '1') || 1;

  const scoredJobs = jobs.map(job => {
    let matchScore = 20; // baseline
    const jobSkills = (job.requiredSkills || []).map(s => (typeof s === 'string' ? s : '').toLowerCase().trim()).filter(Boolean);
    const matchedSkills = [];
    const missingSkills = [];

    jobSkills.forEach(reqSkill => {
      const isMatched = candidateSkills.some(cs => cs.includes(reqSkill) || reqSkill.includes(cs)) ||
                        candidateText.includes(reqSkill);
      if (isMatched) {
        matchedSkills.push(reqSkill);
      } else {
        missingSkills.push(reqSkill);
      }
    });

    const skillRatio = jobSkills.length > 0 ? (matchedSkills.length / jobSkills.length) : 0.6;
    matchScore += Math.round(skillRatio * 50);

    // Title / Department relevance
    const jobTitle = (job.title || '').toLowerCase();
    const jobDept = (job.department || '').toLowerCase();
    if (candidateText.includes(jobTitle) || candidateText.includes(jobDept)) {
      matchScore += 15;
    }

    // Experience match
    const jobExpStr = (job.experience || '').toLowerCase();
    let jobMinExp = 0;
    if (jobExpStr.includes('1-3')) jobMinExp = 1;
    else if (jobExpStr.includes('3-5')) jobMinExp = 3;
    else if (jobExpStr.includes('5+')) jobMinExp = 5;

    if (candidateExpYears >= jobMinExp) {
      matchScore += 15;
    } else {
      matchScore += 5;
    }

    matchScore = Math.min(99, Math.max(30, matchScore));

    return {
      jobId: job.id,
      title: job.title,
      department: job.department,
      location: job.location,
      experience: job.experience,
      employmentType: job.employmentType || 'Full-time',
      matchScore,
      matchedSkills,
      missingSkills,
      compatibilityGrade: matchScore >= 85 ? 'Strong Match' : matchScore >= 65 ? 'Good Match' : 'Potential Fit',
      recommendationReason: matchedSkills.length > 0
        ? `Matches ${matchedSkills.length} of your key skills (${matchedSkills.slice(0, 3).join(', ')})`
        : `Relevant to your background in ${job.department || 'Technology'}`
    };
  });

  return scoredJobs.sort((a, b) => b.matchScore - a.matchScore);
};

const DB_JOB_SKILLS_AUGMENTATION = {
  'devops engineer': ['DevOps', 'AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux', 'Terraform', 'Cloud', 'Git'],
  'mern stack developer': ['MongoDB', 'Express', 'React', 'Node.js', 'JavaScript', 'REST API', 'Git'],
  'generative ai / ml engineer': ['Python', 'Machine Learning', 'Artificial Intelligence', 'NLP', 'TensorFlow', 'PyTorch', 'LLM', 'Deep Learning'],
  'telecalling executive': ['Telecalling', 'Customer Support', 'Cold Calling', 'Voice Process', 'Communication', 'BPO'],
  'business development executive (bde)': ['Business Development', 'Lead Generation', 'B2B Sales', 'Client Acquisition', 'Pitching', 'Sales Strategy'],
  'digital marketing executive': ['Digital Marketing', 'SEO', 'SEM', 'Social Media', 'Google Ads', 'Content Marketing', 'Analytics']
};

const SKILL_ALIASES_MAP = {
  'pl/sql': ['pl/sql', 'plsql', 'sql', 'oracle', 'database', 'rdbms', 'stored procedures', 'queries', 'functions', 'triggers', 'views', 'cursors'],
  'pl/sql procedures': ['pl/sql', 'plsql', 'sql', 'oracle', 'stored procedures', 'procedures', 'functions', 'database'],
  'sql queries': ['sql', 'queries', 'mysql', 'postgresql', 'oracle', 'database', 'pl/sql'],
  'views': ['views', 'sql', 'database', 'queries'],
  'cursors': ['cursors', 'pl/sql', 'sql', 'stored procedures'],
  'exception handling': ['exception handling', 'exception', 'error handling', 'debugging'],
  'packages': ['packages', 'pl/sql', 'oracle', 'database'],
  'triggers': ['triggers', 'pl/sql', 'oracle', 'database'],
  'sql': ['sql', 'mysql', 'postgresql', 'postgres', 'sqlite', 'oracle', 'pl/sql', 'plsql', 't-sql', 'database'],
  'oracle': ['oracle', 'pl/sql', 'plsql', 'sql', 'database'],
  'postgresql': ['postgres', 'postgresql', 'psql', 'sql', 'database'],
  'react': ['react', 'react.js', 'reactjs', 'react native', 'frontend', 'javascript', 'jsx'],
  'node': ['node', 'node.js', 'nodejs', 'express', 'express.js', 'backend', 'javascript'],
  'node.js': ['node', 'node.js', 'nodejs', 'express', 'express.js', 'backend', 'javascript'],
  'javascript': ['javascript', 'js', 'es6', 'ecmascript', 'frontend'],
  'typescript': ['typescript', 'ts'],
  'python': ['python', 'py', 'django', 'flask', 'fastapi'],
  'fastapi & asyncio': ['fastapi', 'asyncio', 'python'],
  'django / flask frameworks': ['django', 'flask', 'python'],
  'restful apis & microservices': ['rest', 'restful', 'api', 'microservices'],
  'postgresql & redis caching': ['postgresql', 'postgres', 'redis', 'database'],
  'pandas and numpy': ['pandas', 'numpy', 'python'],
  'data cleaning and data visualization': ['data cleaning', 'data visualization', 'visualization', 'bi', 'analytics'],
  'core java': ['java', 'core java', 'oop'],
  'git/github': ['git', 'github'],
  'java': ['java', 'spring', 'springboot', 'spring boot', 'j2ee', 'hibernate'],
  'devops': ['devops', 'aws', 'docker', 'kubernetes', 'ci/cd', 'linux', 'cloud', 'terraform', 'git'],
  'aws': ['aws', 'amazon web services', 'ec2', 's3', 'cloud'],
  'docker': ['docker', 'container', 'kubernetes'],
  'kubernetes': ['kubernetes', 'k8s', 'docker'],
  'git': ['git', 'github', 'gitlab', 'version control'],
  'html': ['html', 'html5', 'web', 'frontend'],
  'css': ['css', 'css3', 'tailwind', 'bootstrap', 'style'],
  'sales': ['sales', 'bde', 'business development', 'client acquisition', 'lead generation'],
  'telecalling': ['telecalling', 'calling', 'cold calling', 'voice process', 'customer support', 'bpo']
};

const smartCheckSkillInText = (reqSkill, textLower) => {
  const clean = reqSkill.toLowerCase().trim();
  if (!clean || clean.length < 2) return false;

  // Direct substring check
  if (textLower.includes(clean)) return true;

  // Exact alias list
  const directAliases = SKILL_ALIASES_MAP[clean];
  if (directAliases && directAliases.some(a => textLower.includes(a))) {
    return true;
  }

  // Substring match in keys
  for (const [key, aliasList] of Object.entries(SKILL_ALIASES_MAP)) {
    if (clean.includes(key) || key.includes(clean)) {
      if (aliasList.some(a => textLower.includes(a))) return true;
    }
  }

  // Split words in compound skill (e.g. "Exception Handling", "SQL queries")
  const words = clean.split(/\s+/).filter(w => w.length > 3 && !['with', 'and', 'from', 'using'].includes(w));
  if (words.length > 0 && words.some(w => textLower.includes(w))) {
    return true;
  }

  return false;
};

/**
 * 2. Resume-to-Job Matching
 * Ingests resume text and simultaneously ranks all open jobs.
 */
const matchResumeToJobs = (resumeText, jobs = []) => {
  if (!resumeText) return [];
  const textLower = resumeText.toLowerCase();

  const isTechResume = /(developer|engineer|software|programmer|coding|react|java|python|sql|full stack|frontend|backend|devops|database|cloud|oracle|web)/i.test(textLower);

  return jobs.map(job => {
    const jobTitleLower = (job.title || '').toLowerCase();
    const isSalesJob = /(business development|bde|telecalling|sales|calling|telecaller|marketing)/i.test(jobTitleLower);

    let rawSkillTokens = [];
    if (Array.isArray(job.requiredSkills) && job.requiredSkills.length > 0) {
      job.requiredSkills.forEach(item => {
        if (typeof item === 'string') {
          item.split(/[,|/;\n]/).forEach(token => {
            const clean = token.trim();
            if (clean && clean.length > 1) rawSkillTokens.push(clean);
          });
        }
      });
    }

    for (const [knownTitle, augSkills] of Object.entries(DB_JOB_SKILLS_AUGMENTATION)) {
      if (jobTitleLower.includes(knownTitle) || knownTitle.includes(jobTitleLower)) {
        if (rawSkillTokens.length === 0) {
          rawSkillTokens = [...augSkills];
        }
        break;
      }
    }

    if (rawSkillTokens.length === 0) {
      if (jobTitleLower.includes('developer') || jobTitleLower.includes('engineer')) {
        rawSkillTokens = ['Programming', 'Problem Solving', 'Git', 'Databases'];
      } else {
        rawSkillTokens = ['Communication', 'Domain Knowledge', 'Client Relations'];
      }
    }

    const matchedSkills = [];
    const missingSkills = [];

    rawSkillTokens.forEach(skill => {
      if (smartCheckSkillInText(skill, textLower)) {
        matchedSkills.push(skill);
      } else {
        missingSkills.push(skill);
      }
    });

    if (isTechResume && isSalesJob) {
      const hasRealSalesSkills = /(sales|telecalling|cold calling|lead generation|client acquisition|bde)/i.test(textLower);
      if (!hasRealSalesSkills) {
        return {
          job,
          score: Math.min(12, 8 + matchedSkills.length * 2),
          grade: 'Different Domain',
          isDifferentDomain: true,
          matchedSkills: [],
          missingSkills: rawSkillTokens
        };
      }
    }

    const totalCount = rawSkillTokens.length;
    const matchCount = matchedSkills.length;
    const skillRatio = totalCount > 0 ? (matchCount / totalCount) : 0.3;
    const skillScore = skillRatio * 60;

    let titleBonus = 0;
    const titleWords = jobTitleLower.replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(w => w.length > 3 && !['developer', 'engineer', 'executive'].includes(w));
    if (titleWords.some(w => textLower.includes(w))) {
      titleBonus = 18;
    } else if (textLower.includes(jobTitleLower)) {
      titleBonus = 20;
    } else if (matchCount > 0) {
      titleBonus = 8;
    }

    let expBonus = 0;
    if (matchCount > 0 && (textLower.includes('experience') || textLower.includes('year') || textLower.includes('project'))) {
      expBonus = 15;
    } else if (matchCount > 0) {
      expBonus = 8;
    }

    let totalScore = Math.round(skillScore + titleBonus + expBonus);
    if (matchCount === 0) {
      totalScore = Math.min(20, totalScore);
    }

    totalScore = Math.min(96, Math.max(10, totalScore));

    return {
      job,
      score: totalScore,
      grade: totalScore >= 75 ? 'High Compatibility' : totalScore >= 50 ? 'Moderate Compatibility' : 'Low Compatibility',
      isDifferentDomain: totalScore < 20 && isSalesJob,
      matchedSkills,
      missingSkills
    };
  }).sort((a, b) => b.score - a.score);
};

/**
 * 3. Deep AI Resume Scoring & Audit
 * Comprehensive multi-pillar resume audit with section scores and actionable feedback.
 */
const scoreResumeDeep = (resumeText, targetRole = '') => {
  const text = (resumeText || '').trim();
  const textLower = text.toLowerCase();

  const metricMatches = text.match(/(\d+%\s*|\$\d+|\b₹\d+|\b\d+\s*(?:users|clients|projects|million|k\b|growth|reduction|faster|increase))/gi) || [];
  const metricScore = Math.min(25, metricMatches.length * 6);

  const actionVerbs = ['architected', 'developed', 'engineered', 'implemented', 'optimized', 'spearheaded', 'automated', 'streamlined', 'reduced', 'increased', 'led', 'mentored', 'designed', 'built', 'created', 'managed'];
  const foundVerbs = actionVerbs.filter(v => textLower.includes(v));
  const verbScore = Math.min(20, foundVerbs.length * 3.5);

  const hasEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(text);
  const cleanDigits = text.replace(/[\s-]/g, '');
  const hasPhone = /(?:(?:\+|0{0,2})91)?[6789]\d{9}/.test(cleanDigits) || /\b[6789]\d{9}\b/.test(text) || /\b\d{10}\b/.test(cleanDigits);
  const hasContact = hasEmail || hasPhone;

  const hasExp = /experience|employment|work history|career|projects/i.test(text);
  const hasEdu = /education|university|college|b\.?tech|degree|bachelor|master|diploma/i.test(text);
  const hasSkills = /skills|technologies|proficiencies|tech stack|tools/i.test(text);

  let structureScore = 4;
  if (hasContact) structureScore += 6;
  if (hasExp) structureScore += 6;
  if (hasEdu) structureScore += 4;
  if (hasSkills) structureScore += 5;
  structureScore = Math.min(25, structureScore);

  const techKeywords = ['react', 'node', 'javascript', 'python', 'java', 'sql', 'docker', 'aws', 'git', 'api', 'mongodb', 'typescript', 'tailwind', 'microservices', 'ci/cd', 'database', 'spring', 'linux', 'html', 'css', 'pl/sql', 'oracle'];
  const foundTech = techKeywords.filter(t => textLower.includes(t));
  const techScore = Math.min(30, Math.max(12, foundTech.length * 3));

  const totalScore = Math.min(100, Math.round(metricScore + verbScore + structureScore + techScore));

  const breakdown = {
    metricsAndImpact: { score: Math.round(metricScore), max: 25, label: 'Quantifiable Results & Metrics' },
    actionVerbs: { score: Math.round(verbScore), max: 20, label: 'Strong Action Verbs' },
    structureAndAts: { score: Math.round(structureScore), max: 25, label: 'Standard ATS Structure' },
    technicalDepth: { score: Math.round(techScore), max: 30, label: 'Core Technical Competencies' }
  };

  const strengths = [];
  const improvements = [];

  if (metricMatches.length >= 2) {
    strengths.push(`Good use of quantifiable metrics (${metricMatches.length} detected: e.g. "${metricMatches[0]}")`);
  } else {
    improvements.push('Add quantifiable numbers and metrics to your bullet points (e.g., "Reduced latency by 35%", "Handled 10k daily users")');
  }

  if (foundVerbs.length >= 3) {
    strengths.push(`Strong action verbs utilized: ${foundVerbs.slice(0, 4).join(', ')}`);
  } else {
    improvements.push('Replace passive words like "worked on" with impactful action verbs like "Spearheaded", "Architected", or "Optimized"');
  }

  if (hasEmail && hasPhone) {
    strengths.push('Complete contact information with verified email and phone number');
  } else if (!hasEmail && !hasPhone) {
    improvements.push('Include both an email address and phone number in your contact header');
  } else if (!hasEmail) {
    improvements.push('Include a clear professional email address in the contact header');
  } else if (!hasPhone) {
    improvements.push('Include a direct phone number in the contact header');
  }

  let grade = 'Needs Optimization';
  if (totalScore >= 80) {
    grade = 'Strong Contender (Job Ready)';
  } else if (totalScore >= 60) {
    grade = 'Good Foundation (Minor Polish)';
  } else {
    grade = 'Needs Optimization';
  }

  return {
    overallScore: totalScore,
    grade,
    foundMetricsCount: metricMatches.length,
    foundActionVerbs: foundVerbs,
    identifiedSkills: foundTech,
    breakdown,
    strengths,
    improvements
  };
};

/**
 * 4. Skill Gap Analysis
 * Identifies missing skills and produces a bridge-the-gap learning roadmap.
 */
const analyzeSkillGaps = (candidateSkills = [], targetRoleOrJob = {}) => {
  let reqSkills = [];
  let roleTitle = 'Software Engineer';

  if (typeof targetRoleOrJob === 'string') {
    roleTitle = targetRoleOrJob;
    const lookup = ROLE_KNOWLEDGE_BASE[targetRoleOrJob.toLowerCase()] || ROLE_KNOWLEDGE_BASE['general tech'];
    reqSkills = lookup.coreSkills || ['React', 'JavaScript', 'Node.js', 'SQL', 'Git'];
  } else if (targetRoleOrJob && targetRoleOrJob.title) {
    roleTitle = targetRoleOrJob.title;
    reqSkills = targetRoleOrJob.requiredSkills || [];
    if (reqSkills.length === 0) {
      reqSkills = ['React', 'Node.js', 'PostgreSQL', 'Git', 'REST API'];
    }
  }

  const cleanCand = candidateSkills.map(s => s.toLowerCase().trim());
  const matched = [];
  const missing = [];

  reqSkills.forEach(req => {
    const isMatch = cleanCand.some(c => c.includes(req.toLowerCase()) || req.toLowerCase().includes(c));
    if (isMatch) matched.push(req);
    else missing.push(req);
  });

  const matchPercent = reqSkills.length > 0 ? Math.round((matched.length / reqSkills.length) * 100) : 100;

  // Learning Roadmap generator
  const learningRoadmap = missing.map((skill, index) => ({
    week: `Week ${index + 1}`,
    skill,
    focus: `Foundational and hands-on production usage of ${skill}`,
    recommendedProject: `Build a mini-service or demo module implementing ${skill} with end-to-end testing`,
    freeResources: [`Official ${skill} Documentation & Quickstart`, `FreeCodeCamp & MDN Guides for ${skill}`, `GitHub Open Source Starters`]
  }));

  return {
    roleTitle,
    matchPercentage: matchPercent,
    readinessStatus: matchPercent >= 75 ? 'Job Ready' : matchPercent >= 50 ? 'Moderate Preparation Required' : 'Significant Skill Gap',
    estimatedWeeksToBridge: Math.max(1, Math.ceil(missing.length * 1.5)),
    matchedSkills: matched,
    missingSkills: missing,
    learningRoadmap
  };
};

/**
 * 5. AI Interview Preparation
 * Generates questions and performs real-time AI evaluation on candidate answers.
 */
const generateInterviewQuestions = (role = 'Frontend Developer', category = 'All', specificSkills = [], difficulty = 'All') => {
  const normalizedRole = (role || '').toLowerCase();
  let roleData = null;

  for (const [key, data] of Object.entries(ROLE_KNOWLEDGE_BASE)) {
    if (normalizedRole.includes(key) || key.includes(normalizedRole)) {
      roleData = data;
      break;
    }
  }

  let questions = roleData ? [...(roleData.interviewBank || [])] : [];

  // If role is unknown/custom, dynamically synthesize domain-appropriate questions
  if (questions.length === 0) {
    const isSalesOrVoice = /(telecalling|sales|calling|telecaller|voice|bpo|customer support)/i.test(normalizedRole);
    const primarySkill = (specificSkills && specificSkills.length > 0) ? specificSkills[0] : (isSalesOrVoice ? 'Objection Handling' : 'Core Architecture');
    const secondarySkill = (specificSkills && specificSkills.length > 1) ? specificSkills[1] : (isSalesOrVoice ? 'CRM Workflow' : 'System Performance');

    if (isSalesOrVoice) {
      questions = [
        {
          id: 'dyn-tc-hard-1',
          category: 'Problem Solving',
          difficulty: 'Hard',
          question: `A high-value enterprise prospect threatens regulatory action over an unwanted call. How do you de-escalate this crisis immediately using ${primarySkill} and CRM compliance flags?`,
          keywords: ['de-escalate', 'dnc', 'crm', 'empathy', 'active listening', 'compliance', 'professionalism'],
          exemplar: 'I lower my vocal pitch, validate their frustration without defensiveness, mark their record as Permanent DNC across our CRM system immediately, and send written confirmation of compliance.'
        },
        {
          id: 'dyn-tc-med-1',
          category: 'Technical',
          difficulty: 'Medium',
          question: `How do you optimize your call opening hook within the first 15 seconds using ${primarySkill} to maximize connect-to-pitch conversion?`,
          keywords: ['hook', 'pattern interrupt', 'rapport', 'value proposition', 'conversion', 'pacing'],
          exemplar: 'I use a pattern interrupt and concise value proposition, asking for permission to share a 30-second context, boosting interest and engagement before jumping into diagnostic questions.'
        },
        {
          id: 'dyn-tc-fun-1',
          category: 'Behavioral',
          difficulty: 'Fundamental',
          question: `Describe how you maintain high vocal energy, resilience, and positive tonality across 80+ cold calls per day while leveraging ${secondarySkill}.`,
          keywords: ['energy', 'tonality', 'resilience', 'pacing', 'active listening', 'crm notes'],
          exemplar: 'I batch calls into 45-minute focused sprints with short 5-minute resets, track conversion ratios in Excel/CRM, and treat each rejection as a stepping stone to the next conversion.'
        }
      ];
    } else {
      questions = [
        {
          id: 'dyn-tech-hard-1',
          category: 'Technical',
          difficulty: 'Hard',
          question: `How do you diagnose and resolve severe performance bottlenecks, concurrency deadlocks, or latency spikes in high-throughput production systems utilizing ${primarySkill}?`,
          keywords: ['profiling', 'latency', 'concurrency', 'deadlock', 'indexing', 'caching', 'metrics', primarySkill.toLowerCase()],
          exemplar: 'I inspect APM distributed traces and database query execution plans, isolate thread contention or unindexed queries, and implement connection pooling and caching.'
        },
        {
          id: 'dyn-tech-med-1',
          category: 'Problem Solving',
          difficulty: 'Medium',
          question: `Suppose a critical module utilizing ${primarySkill} fails under spike traffic. How do you implement circuit breakers, graceful degradation, and automated recovery?`,
          keywords: ['circuit breaker', 'graceful degradation', 'fallback', 'retry', 'resilience', primarySkill.toLowerCase()],
          exemplar: 'I implement circuit breaker patterns with exponential backoff and jitter, shedding non-essential load to maintain core system availability.'
        },
        {
          id: 'dyn-beh-fun-1',
          category: 'Behavioral',
          difficulty: 'Fundamental',
          question: `Describe a challenging project where you utilized ${primarySkill} and ${secondarySkill} and had to balance tight deadlines with quality standards.`,
          keywords: ['deadline', 'priority', 'testing', 'refactor', 'delivery', 'outcome', 'metrics'],
          exemplar: 'I prioritized high-impact features, established automated unit test suites, and communicated trade-offs with stakeholders to ensure on-time delivery with zero critical regressions.'
        }
      ];
    }
  }

  // Filter by category
  if (category && category !== 'All') {
    const catFiltered = questions.filter(q => (q.category || '').toLowerCase() === category.toLowerCase());
    if (catFiltered.length > 0) {
      questions = catFiltered;
    }
  }

  // Filter by difficulty
  if (difficulty && difficulty !== 'All') {
    const diffFiltered = questions.filter(q => (q.difficulty || '').toLowerCase() === difficulty.toLowerCase());
    if (diffFiltered.length > 0) {
      questions = diffFiltered;
    }
  }

  return questions;
};

const evaluateInterviewAnswer = (question, candidateAnswer) => {
  if (!candidateAnswer || candidateAnswer.trim().length < 15) {
    return {
      score: 25,
      feedback: 'The answer is too brief. Provide a structured explanation including the context, solution, and outcome.',
      starStructure: { situation: false, task: false, action: false, result: false },
      exemplar: question?.exemplar || 'Please refer to standard architecture guidelines.'
    };
  }

  const ansLower = candidateAnswer.toLowerCase();
  const words = ansLower.split(/\s+/).filter(Boolean);

  // Keyword coverage
  const keywords = question.keywords || [];
  const matchedKeywords = keywords.filter(k => ansLower.includes(k.toLowerCase()));
  const keywordScore = keywords.length > 0 ? (matchedKeywords.length / keywords.length) * 40 : 30;

  // STAR Method detection
  const hasSituation = /situation|context|problem|background|when i was|project|issue/i.test(ansLower);
  const hasAction = /action|i did|implemented|used|architected|configured|coded|built/i.test(ansLower);
  const hasResult = /result|outcome|improved|reduced|achieved|boosted|resolved|metric|percent/i.test(ansLower);

  let starScore = 0;
  if (hasSituation) starScore += 10;
  if (hasAction) starScore += 15;
  if (hasResult) starScore += 15;

  // Length & Clarity score
  let clarityScore = 10;
  if (words.length >= 60) clarityScore = 20;
  else if (words.length >= 35) clarityScore = 15;

  const totalScore = Math.min(100, Math.round(keywordScore + starScore + clarityScore));

  let feedback = '';
  if (totalScore >= 80) {
    feedback = 'Outstanding answer! You demonstrated solid technical depth, clear structured thought, and highlighted real-world impact.';
  } else if (totalScore >= 60) {
    feedback = 'Good response. To make it stand out, explicitly articulate the final outcome/metric and mention key architectural terminology.';
  } else {
    feedback = 'Fair attempt. Make sure to structure your answer using the STAR method: explain the challenge, the concrete actions you took, and the measured outcome.';
  }

  return {
    score: totalScore,
    matchedKeywords,
    missingKeywords: keywords.filter(k => !matchedKeywords.includes(k)),
    starStructure: {
      situation: hasSituation,
      task: true,
      action: hasAction,
      result: hasResult
    },
    feedback,
    exemplar: question.exemplar
  };
};

/**
 * 6. AI Chatbot for Job Seekers (Career Copilot)
 * Handles conversational inquiries, job search assistance, and career coaching.
 */
const processAIChatMessage = (message, openJobs = []) => {
  const msgLower = (message || '').trim().toLowerCase();

  // Helper to get formatted skills for any job
  const getJobSkills = (job) => {
    let sList = [];
    if (Array.isArray(job.requiredSkills) && job.requiredSkills.length > 0) {
      sList = job.requiredSkills.map(s => String(s).trim()).filter(Boolean);
    } else {
      const title = (job.title || '').toLowerCase();
      for (const [k, v] of Object.entries(DB_JOB_SKILLS_AUGMENTATION)) {
        if (title.includes(k) || k.includes(title)) {
          sList = v;
          break;
        }
      }
    }
    return sList.length > 0 ? sList : ['Problem Solving', 'Domain Knowledge', 'Git'];
  };

  // Helper to find a specific job if user mentioned a role title
  const findMentionedJob = (text) => {
    return openJobs.find(j => {
      const t = (j.title || '').toLowerCase();
      if (t.length > 3 && text.includes(t)) return true;
      const keyParts = t.replace(/[^a-z0-9]/g, ' ').split(/\s+/).filter(w => w.length > 3 && !['developer', 'engineer', 'executive'].includes(w));
      return keyParts.some(p => text.includes(p));
    });
  };

  // -------------------------------------------------------------
  // 1. SKILL REQUIREMENTS INTENT
  // E.g.: "What skills do I need for these roles?", "What are the required skills?", "tech stack"
  // -------------------------------------------------------------
  if (
    msgLower.includes('skill') ||
    msgLower.includes('tech stack') ||
    msgLower.includes('technology') ||
    msgLower.includes('technologies') ||
    msgLower.includes('requirement') ||
    msgLower.includes('prerequisite') ||
    msgLower.includes('qualification') ||
    msgLower.includes('padikkanum') ||
    msgLower.includes('theva') ||
    msgLower.includes('what do i need')
  ) {
    const specificJob = findMentionedJob(msgLower);

    if (specificJob) {
      const skills = getJobSkills(specificJob);
      return {
        sender: 'ai',
        text: `### 🎯 Key Skills Required for **${specificJob.title}**\n\nTo succeed in this role at ORASSYS (${specificJob.department || 'Technology'}), our recruiters look for:\n\n${skills.map(s => `• **${s}**`).join('\n')}\n\n**Experience Expected:** ${specificJob.experience || '0-3 Years'}\n**Location:** ${specificJob.location || 'Chennai / Hybrid'}\n\nWould you like to analyze how closely your resume matches these specific skills?`,
        jobs: [{ id: specificJob.id, title: specificJob.title, department: specificJob.department, location: specificJob.location }],
        suggestions: [`Check my ATS match for ${specificJob.title}`, `Interview questions for ${specificJob.title}`, 'Analyze my skill gap']
      };
    }

    // General skill breakdown across active roles
    if (openJobs.length > 0) {
      const roleBreakdown = openJobs.slice(0, 5).map(job => {
        const skills = getJobSkills(job).slice(0, 5).join(', ');
        return `• **${job.title}** (${job.department}): ${skills}`;
      }).join('\n');

      return {
        sender: 'ai',
        text: `### 🛠️ In-Demand Skills for Current ORASSYS Openings\n\nHere are the primary technical and professional skills needed across our active positions:\n\n${roleBreakdown}\n\n💡 **Tip:** Use our **Skill Gap Analysis** tab to pick any of these roles and get a personalized 6-week learning curriculum!`,
        suggestions: ['Analyze my skill gap', 'How to format my resume for ATS?', 'What are the salary ranges?']
      };
    }

    return {
      sender: 'ai',
      text: `### 🛠️ Top Skills in High Demand\n\n1. **Full-Stack / Backend:** Java (Spring Boot), Python (FastAPI/Django), PL/SQL, REST APIs, Microservices\n2. **Cloud & DevOps:** Docker, Kubernetes, AWS, CI/CD pipelines, Linux\n3. **Frontend:** React.js, Next.js, Modern JavaScript (ES6+), Tailwind CSS\n4. **Data Analytics:** SQL, Power BI, Python (Pandas/NumPy), Statistics\n5. **Core Professional:** Problem-solving, Git version control, Agile workflow\n\nUpload your resume to our **Resume Scoring** tab to see your exact skill match!`,
      suggestions: ['Check my ATS resume score', 'View active openings', 'Practice interview questions']
    };
  }

  // -------------------------------------------------------------
  // 2. SALARY & COMPENSATION INTENT
  // E.g.: "What is the salary?", "How much do they pay?", "Package for developer", "CTC"
  // -------------------------------------------------------------
  if (
    msgLower.includes('salary') ||
    msgLower.includes('package') ||
    msgLower.includes('ctc') ||
    msgLower.includes('lpa') ||
    msgLower.includes('pay') ||
    msgLower.includes('compensation') ||
    msgLower.includes('stipend') ||
    msgLower.includes('earning') ||
    msgLower.includes('sambalam') ||
    msgLower.includes('how much')
  ) {
    const specificJob = findMentionedJob(msgLower);

    return {
      sender: 'ai',
      text: `### 💰 Compensation & Salary Structure\n\nAt ORASSYS, salary is competitive and benchmarked against merit, technical test scores, and interview performance:\n\n• **Software Developers (Java / Python / MERN):** ₹4,50,000 – ₹10,00,000 / year\n• **DevOps & Cloud Engineers:** ₹6,00,000 – ₹14,00,000 / year\n• **Data Analysts:** ₹4,00,000 – ₹8,50,000 / year\n• **Telecalling & Business Development:** ₹2,80,000 – ₹6,00,000 / year + attractive incentives\n\n${specificJob ? `For **${specificJob.title}**, candidates with strong core competency and hands-on project depth receive top-bracket offers.` : ''}\n\n*All packages include health insurance, performance bonuses, and skill development allowances.*`,
      suggestions: ['What skills give higher salary?', 'How to apply for these jobs?', 'Practice interview to get higher score']
    };
  }

  // -------------------------------------------------------------
  // 3. APPLICATION & HIRING PROCESS INTENT
  // E.g.: "How to apply?", "How do I submit my resume?", "hiring process", "apply panna"
  // -------------------------------------------------------------
  if (
    msgLower.includes('how to apply') ||
    msgLower.includes('apply process') ||
    msgLower.includes('hiring process') ||
    msgLower.includes('steps to apply') ||
    msgLower.includes('where to apply') ||
    msgLower.includes('how can i apply') ||
    msgLower.includes('submit resume') ||
    msgLower.includes('apply panradhu') ||
    msgLower.includes('apply panna') ||
    msgLower.includes('procedure') ||
    (msgLower.includes('apply') && !msgLower.includes('job') && !msgLower.includes('devops'))
  ) {
    return {
      sender: 'ai',
      text: `### 🚀 How to Apply at ORASSYS (4 Easy Steps)\n\n1. **Browse Openings:** Explore current vacancies under the **Careers** page or from the cards below.\n2. **1-Click Apply:** Click **"Apply"** on your preferred position.\n3. **Upload Your Resume:** Submit your PDF or DOCX resume with verified phone and email.\n4. **Automated AI Screening & Recruiter Call:** Our system verifies keyword compatibility, and shortlisted candidates are contacted within 48–72 hours.\n\nReady to get started? Check out our top openings:`,
      jobs: openJobs.slice(0, 3).map(j => ({ id: j.id, title: j.title, department: j.department, location: j.location })),
      suggestions: ['Test my resume ATS score first', 'What skills are required?', 'Prepare for interview']
    };
  }

  // -------------------------------------------------------------
  // 4. INTERVIEW PREPARATION & QUESTIONS INTENT
  // E.g.: "How to prepare for interview?", "Give me sample questions", "mock interview"
  // -------------------------------------------------------------
  if (
    msgLower.includes('interview') ||
    msgLower.includes('question') ||
    msgLower.includes('mock') ||
    msgLower.includes('round') ||
    msgLower.includes('prepare') ||
    msgLower.includes('kelvi') ||
    msgLower.includes('answer')
  ) {
    const specificJob = findMentionedJob(msgLower);

    if (specificJob) {
      return {
        sender: 'ai',
        text: `### 🎙️ Interview Preparation for **${specificJob.title}**\n\nHere is how to ace your technical discussion for this role:\n\n1. **Core Architecture:** Be ready to explain your projects, database schema choices, and asynchronous processing.\n2. **STAR Framework:** Structure answers into Situation, Task, Action, and Measurable Result (e.g., *"Reduced latency by 35%"*).\n3. **Live Simulator:** You can practice interactive, role-specific questions with instant AI scoring in our **AI Interview Preparation** tab!\n\nWould you like to begin a practice session right now?`,
        suggestions: [`Practice mock interview for ${specificJob.title}`, 'Check common behavioral questions', 'Analyze my skill gap']
      };
    }

    return {
      sender: 'ai',
      text: `### 🎙️ ORASSYS Interview Preparation Guide\n\nOur interview process typically includes:\n\n1. **Technical Round:** Questions on core language fundamentals (OOP, data structures), framework patterns, and database query optimization.\n2. **System / Problem-Solving Round:** Whiteboard discussion on how you diagnose bottlenecks, design APIs, and handle errors.\n3. **HR / Cultural Round:** Communication, collaborative spirit, and adaptability.\n\n💡 Head over to our **AI Interview Preparation** tab to take a simulated mock interview with real-time feedback and exemplar answers!`,
      suggestions: ['Practice technical interview', 'What skills do I need for developer roles?', 'Check my resume ATS score']
    };
  }

  // -------------------------------------------------------------
  // 5. RESUME & ATS AUDIT INTENT
  // E.g.: "How to improve my resume?", "What is ATS score?", "CV tips"
  // -------------------------------------------------------------
  if (
    msgLower.includes('resume') ||
    msgLower.includes('ats') ||
    msgLower.includes('cv') ||
    msgLower.includes('score') ||
    msgLower.includes('audit') ||
    msgLower.includes('format')
  ) {
    return {
      sender: 'ai',
      text: `### 📄 High-Impact ATS Resume Checklist\n\n1. **Quantify Bullet Points:** Use numbers and percentages (e.g., *"Automated daily reporting, saving 4 engineering hours per week"*).\n2. **Action Verbs:** Start bullet points with *"Architected"*, *"Spearheaded"*, *"Optimized"*, *"Automated"* rather than passive *"worked on"*.\n3. **Keyword Matching:** Ensure exact technologies from the job post (e.g. Docker, PostgreSQL, React) are explicitly listed.\n4. **Clean Single-Column Format:** Avoid dual columns, heavy graphics, or tables which confuse automated parsers.\n\nTry uploading your resume in the **Resume Scoring** tab right now for an instant deep audit!`,
      suggestions: ['Go to AI Resume Scoring', 'Show open Developer jobs', 'What skills are in demand?']
    };
  }

  // -------------------------------------------------------------
  // 6. CAREER ROADMAP & GROWTH INTENT
  // E.g.: "Career path", "How to become a senior developer", "growth", "roadmap"
  // -------------------------------------------------------------
  if (
    msgLower.includes('roadmap') ||
    msgLower.includes('career') ||
    msgLower.includes('growth') ||
    msgLower.includes('future') ||
    msgLower.includes('path') ||
    msgLower.includes('bridge') ||
    msgLower.includes('learn')
  ) {
    return {
      sender: 'ai',
      text: `### 🗺️ Engineering Career Acceleration Roadmap\n\n• **Year 1 (Foundation):** Clean code, design patterns, testing, Git mastery, and database optimization.\n• **Year 2 (Ownership):** Microservices architecture, CI/CD automation, cloud deployment (AWS/Docker), performance tuning.\n• **Year 3+ (Leadership):** System architecture, security compliance, cross-team technical mentorship, scaling systems to 100k+ users.\n\nUse our **Career Roadmap** tab to explore a personalized timeline tailored to your exact years of experience!`,
      suggestions: ['Explore Career Roadmap tab', 'Analyze my skill gap', 'View active openings']
    };
  }

  // -------------------------------------------------------------
  // 7. SPECIFIC ROLE DEEP DIVE INTENT
  // E.g. "Tell me about PL/SQL", "DevOps role", "Data Analyst opening"
  // -------------------------------------------------------------
  const matchedSingleJob = findMentionedJob(msgLower);
  if (matchedSingleJob && (msgLower.includes('about') || msgLower.includes('tell') || msgLower.includes('details') || msgLower.includes('what is') || msgLower.includes('explain'))) {
    const skills = getJobSkills(matchedSingleJob);
    return {
      sender: 'ai',
      text: `### 💼 Position Overview: **${matchedSingleJob.title}**\n\n• **Department:** ${matchedSingleJob.department || 'Technology'}\n• **Location:** ${matchedSingleJob.location || 'Chennai / Hybrid'}\n• **Experience Required:** ${matchedSingleJob.experience || '0-3 Years'}\n• **Key Tech Stack:** ${skills.join(', ')}\n\n${matchedSingleJob.description ? `*Description:* ${matchedSingleJob.description.slice(0, 180)}...` : 'You will work on mission-critical features, collaborative code reviews, and enterprise deliverables.'}\n\nYou can apply directly with your resume:`,
      jobs: [{ id: matchedSingleJob.id, title: matchedSingleJob.title, department: matchedSingleJob.department, location: matchedSingleJob.location, experience: matchedSingleJob.experience }],
      suggestions: [`What skills do I need for ${matchedSingleJob.title}?`, `Interview questions for ${matchedSingleJob.title}`, 'Check other openings']
    };
  }

  // -------------------------------------------------------------
  // 8. WORK LOCATION & CULTURE INTENT
  // E.g. "Where is the office?", "Work from home?", "Remote?", "Chennai", "Culture"
  // -------------------------------------------------------------
  if (
    msgLower.includes('location') ||
    msgLower.includes('chennai') ||
    msgLower.includes('remote') ||
    msgLower.includes('work from home') ||
    msgLower.includes('wfh') ||
    msgLower.includes('office') ||
    msgLower.includes('culture') ||
    msgLower.includes('timing')
  ) {
    return {
      sender: 'ai',
      text: `### 🏢 Office Location & Work Culture\n\n• **Headquarters:** Chennai, Tamil Nadu.\n• **Work Mode:** Collaborative on-site and hybrid work models depending on the specific team and role requirements.\n• **Engineering Culture:** We value autonomy, rapid innovation, continuous learning, and transparent peer code reviews.\n• **Perks:** Mentorship programs, annual performance reviews, modern workstation setup, and dedicated training resources.\n\nCheck out our current vacancies in Chennai:`,
      jobs: openJobs.slice(0, 3).map(j => ({ id: j.id, title: j.title, department: j.department, location: j.location })),
      suggestions: ['How to apply?', 'What skills are in demand?', 'Check my ATS score']
    };
  }

  // -------------------------------------------------------------
  // 9. EXPLICIT JOB SEARCH INTENT
  // E.g.: "What jobs are open right now?", "Show me developer openings", "list vacancies"
  // -------------------------------------------------------------
  if (
    msgLower.includes('show') ||
    msgLower.includes('find') ||
    msgLower.includes('search') ||
    msgLower.includes('open right now') ||
    msgLower.includes('openings') ||
    msgLower.includes('vacancies') ||
    msgLower.includes('available') ||
    msgLower.includes('list') ||
    msgLower.includes('hiring') ||
    msgLower.includes('irruka')
  ) {
    let filteredJobs = openJobs;

    if (msgLower.includes('dev') || msgLower.includes('code') || msgLower.includes('software')) {
      filteredJobs = openJobs.filter(j => (j.department || '').toLowerCase().includes('dev') || (j.title || '').toLowerCase().includes('dev') || (j.title || '').toLowerCase().includes('engineer'));
    } else if (msgLower.includes('sales') || msgLower.includes('bde') || msgLower.includes('telecall')) {
      filteredJobs = openJobs.filter(j => (j.department || '').toLowerCase().includes('sales') || (j.title || '').toLowerCase().includes('telecall') || (j.title || '').toLowerCase().includes('business'));
    }

    const displayJobs = filteredJobs.length > 0 ? filteredJobs.slice(0, 4) : openJobs.slice(0, 3);

    return {
      sender: 'ai',
      text: `Here are the active positions matching your criteria at ORASSYS:`,
      jobs: displayJobs.map(j => ({ id: j.id, title: j.title, department: j.department, location: j.location, experience: j.experience })),
      suggestions: ['What skills do I need for these roles?', 'How to apply?', 'Check my ATS score']
    };
  }

  // -------------------------------------------------------------
  // 10. GREETINGS & GENERAL CONVERSATION INTENT
  // E.g.: "Hi", "Hello", "Vanakkam", "Help", "Who are you"
  // -------------------------------------------------------------
  if (
    msgLower === 'hi' ||
    msgLower === 'hello' ||
    msgLower === 'hey' ||
    msgLower.includes('vanakkam') ||
    msgLower.includes('good morning') ||
    msgLower.includes('good afternoon') ||
    msgLower.includes('who are you') ||
    msgLower.includes('help')
  ) {
    return {
      sender: 'ai',
      text: `👋 **Vanakkam & Hello!** I am your **ORASSYS AI Career Assistant**.\n\nI can help you with:\n1. 🔍 **Exploring real job openings** & role requirements\n2. 🛠️ **Finding required skills** for any position\n3. 📄 **Evaluating resume ATS compatibility**\n4. 🎙️ **Practicing role-specific interview questions**\n5. 💰 **Salary ranges & application process**\n\nWhat would you like to explore today?`,
      suggestions: [
        'What skills do I need for these roles?',
        'What jobs are open right now?',
        'How to optimize my resume for ATS?',
        'How to prepare for technical interview?'
      ]
    };
  }

  // -------------------------------------------------------------
  // 11. SMART FALLBACK WITH CONTEXTUAL GUIDANCE
  // -------------------------------------------------------------
  return {
    sender: 'ai',
    text: `I'm here to assist you with your career at ORASSYS! Whether you want to know **required skills for our roles**, explore **active job openings**, understand **salary benchmarks**, or **prepare for technical interviews**, I'm ready to guide you.\n\nChoose an option below or type any specific question!`,
    suggestions: [
      'What skills do I need for these roles?',
      'What jobs are open right now?',
      'How to apply for these positions?',
      'Prepare for technical interview'
    ]
  };
};

/**
 * 7. Duplicate & Suspicious Job Detection
 * Quality assurance & fraud guardian for Admin and Candidate safety.
 */
const detectSuspiciousAndDuplicateJobs = (newJob, existingJobs = []) => {
  const flags = [];
  let trustScore = 98; // High baseline

  const title = (newJob.title || '').trim().toLowerCase();
  const desc = (newJob.description || '').trim().toLowerCase();
  const salary = (newJob.salaryRange || '').toLowerCase();

  // 1. Duplicate Detection Check
  const duplicates = existingJobs.filter(ej => {
    if (!ej.id || ej.id === newJob.id) return false;
    const ejTitle = (ej.title || '').trim().toLowerCase();
    const ejDept = (ej.department || '').trim().toLowerCase();

    // Check title equality
    if (ejTitle === title && ejDept === (newJob.department || '').trim().toLowerCase()) {
      return true;
    }

    // Levenshtein / substring check
    if (ejTitle.length > 5 && (title.includes(ejTitle) || ejTitle.includes(title))) {
      return true;
    }

    return false;
  });

  if (duplicates.length > 0) {
    flags.push({
      type: 'duplicate',
      severity: 'high',
      message: `Potential duplicate job detected: "${duplicates[0].title}" (${duplicates[0].department}) already exists.`
    });
    trustScore -= 30;
  }

  // 2. Suspicious Scam Triggers Check
  const scamKeywords = [
    { word: 'registration fee', reason: 'Legitimate jobs never require upfront registration fees.' },
    { word: 'deposit money', reason: 'Demanding deposits is a primary indicator of recruitment fraud.' },
    { word: 'telegram', reason: 'Directing applicants to unofficial Telegram handles violates verified policy.' },
    { word: 'whatsapp only', reason: 'Requiring WhatsApp-only contact without corporate email verification.' },
    { word: 'earn 50000 per day', reason: 'Unrealistic income guarantees indicate spam/phishing.' },
    { word: 'bitcoin', reason: 'Cryptocurrency payment references are restricted in job descriptions.' },
    { word: 'click this link to claim', reason: 'Potential phishing URL structure.' }
  ];

  scamKeywords.forEach(({ word, reason }) => {
    if (desc.includes(word) || title.includes(word)) {
      flags.push({
        type: 'scam_risk',
        severity: 'critical',
        message: `Suspicious pattern detected: "${word}". ${reason}`
      });
      trustScore -= 35;
    }
  });

  // 3. Short / Low Effort Description Check
  const wordsCount = desc.split(/\s+/).filter(Boolean).length;
  if (wordsCount < 15 && wordsCount > 0) {
    flags.push({
      type: 'quality',
      severity: 'medium',
      message: 'Job description is unusually short (< 15 words). Candidates may perceive it as low quality or unverified.'
    });
    trustScore -= 15;
  }

  // 4. Abnormal Salary Range Check
  if (salary.includes('10000000') || salary.includes('$50000/week') || salary.includes('1 crore per month')) {
    flags.push({
      type: 'anomaly',
      severity: 'medium',
      message: 'Salary range appears abnormally inflated compared to standard market benchmarks.'
    });
    trustScore -= 20;
  }

  trustScore = Math.max(10, Math.min(100, trustScore));

  return {
    trustScore,
    status: trustScore >= 80 ? 'Verified & Safe' : trustScore >= 50 ? 'Needs Review' : 'High Risk / Blocked',
    isSuspicious: trustScore < 70,
    hasDuplicates: duplicates.length > 0,
    detectedFlags: flags,
    recommendations: flags.length === 0
      ? ['Job adheres to ORASSYS quality standards and safety guidelines.']
      : flags.map(f => f.message)
  };
};

/**
 * 8. Personalized Career Recommendations
 * Generates tailored career trajectory roadmaps and promotion milestones.
 */
const getPersonalizedCareerPath = (currentRole = 'Frontend Developer', candidateSkills = [], experienceYears = 1) => {
  const normalized = (currentRole || '').toLowerCase();
  let roleData = ROLE_KNOWLEDGE_BASE['general tech'];

  for (const [key, data] of Object.entries(ROLE_KNOWLEDGE_BASE)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      roleData = data;
      break;
    }
  }

  const paths = roleData.careerPaths || [];
  const salaryBenchmark = roleData.salaryAvg || '₹6,00,000 - ₹15,00,000';

  return {
    currentRole,
    experienceLevel: experienceYears <= 1 ? 'Early Career / Fresher' : experienceYears <= 3 ? 'Mid-Level Professional' : 'Senior / Lead',
    marketSalaryBenchmark: salaryBenchmark,
    suggestedTrajectories: paths.map(p => ({
      pathTitle: p.path,
      year1Milestone: p.y1,
      year2Milestone: p.y2,
      year3Milestone: p.y3,
      recommendedNextCertification: 'AWS Certified Developer / Google Professional Cloud Architect'
    }))
  };
};

module.exports = {
  getAIJobRecommendations,
  matchResumeToJobs,
  scoreResumeDeep,
  analyzeSkillGaps,
  generateInterviewQuestions,
  evaluateInterviewAnswer,
  processAIChatMessage,
  detectSuspiciousAndDuplicateJobs,
  getPersonalizedCareerPath
};
