
const PAPERS = [
{
 id:"noor2019",year:"2019",authors:"Safwat Mostafa Noor & Eugene B. John",
 title:"Resource Shared Galois Field Computation for Energy Efficient AES/CRC in IoT Applications",
 venue:"IEEE Transactions on Sustainable Computing", tags:["GF","resource sharing","AES-128","CRC-32","ASIC"],
 problem:"Reduce hardware area and energy by exploiting common arithmetic between AES and CRC in IoT-oriented hardware.",
 novelty:"A single configurable Galois Field Computation Unit (GFCU) is shared by AES-128 and CRC-32. The design also uses row-wise 32-bit AES processing.",
 methodology:["Decompose AES and CRC into low-level XOR, shift and GF operations.","Map common operations to a configurable 32-bit GFCU.","Use microcoded control to coordinate the shared resources.","Apply clock gating and data gating to reduce switching activity.","Implement and verify the RTL in Verilog."],
 results:["90-nm ASIC","~2.3K gates","~22,724 μm²","0.8 V, 100 MHz","~280 pJ/AES-128","~140 pJ/CRC-32","25.6 Mb/s operating point"],
 limitation:"A single shared GFCU prevents AES and CRC from using the same arithmetic resource concurrently, creating a bandwidth/resource-contention limitation.",
 next:"The selected literature does not directly solve this concurrency limitation. Instead, subsequent work shifts toward optimizing dominant AES components, especially the S-box.",
 adopt:["Resource sharing","Reusable GF primitives","Microcoded control","Clock/data gating"],
 dont:["Do not present a shared AES+CRC unit as a new idea by itself."],
 doi:"",
 citations:"Uploaded paper + literature-review notes"
},
{
 id:"teng2021",year:"2021/2022",authors:"You-Tun Teng et al.",
 title:"VLSI Architecture of S-Box With High Area Efficiency Based on Composite Field Arithmetic",
 venue:"IEEE Access",tags:["S-box","inverse S-box","CFA","area","ASIC","FPGA"],
 problem:"Reduce the hardware cost of the AES S-box and inverse S-box, which are important nonlinear and implementation-intensive components.",
 novelty:"Joint optimization of S-box/inverse S-box using composite-field arithmetic, optimized GF((2²)²) multiplication, squaring × λ, inversion and shared preprocessing/postprocessing.",
 methodology:["Map GF(2⁸) into composite fields.","Reduce mathematical expressions to Boolean hardware.","Share preprocessing and postprocessing between S-box and inverse S-box.","Use a five-stage pipeline with 11 four-bit registers.","Evaluate FPGA and ASIC implementations."],
 results:["5.79 Gb/s S-box throughput on Virtex-6","~10% improvement in reported area efficiency versus cited conventional implementation","~30% ASIC area-efficiency improvement in the cited 90-nm comparison","25.5% improvement in a cited 40-nm comparison"],
 limitation:"The work remains S-box/inverse-S-box focused. The paper identifies integration of the optimized blocks into the complete AES circuit as future work.",
 next:"The next selected paper continues S-box optimization but changes emphasis from area efficiency toward operating frequency and throughput.",
 adopt:["CFA decomposition","Joint S-box/inverse S-box","Boolean reduction","Shared preprocessing/postprocessing","Pipeline balancing"],
 dont:["Do not claim CFA itself as the novelty."],
 doi:"https://doi.org/10.1109/ACCESS.2021.3139040",
 citations:"Uploaded paper + literature-review notes"
},
{
 id:"lin2023",year:"2023",authors:"Shih-Hsiang Lin et al.",
 title:"Hardware Implementation of High-Throughput S-Box in AES for Information Security",
 venue:"IEEE Access",tags:["S-box","throughput","pipeline","CFA","ASIC"],
 problem:"Reduce the critical path of composite-field S-box implementations and increase maximum frequency/throughput.",
 novelty:"A seven-stage pipelined combined S-box/inverse S-box with dedicated multistage processing for multiplication, squaring, inversion and variable multiplication.",
 methodology:["Partition composite-field operations across seven pipeline stages.","Optimize multiplicative offsets through exhaustive search.","Reduce mapping logic using hardware-friendly constants.","Implement in Verilog.","Synthesize with Synopsys Design Compiler and TSMC 40-nm library.","Verify all 256 S-box inputs."],
 results:["34.78 Gb/s throughput","~4347.83 MHz maximum frequency","43.47% higher maximum frequency than the comparison architecture","9.42 Mbps/GC throughput-area efficiency","~1.61 ns latency","~10.97% area increase","Higher register/sequential power"],
 limitation:"Additional pipeline registers increase area and sequential/register power. The contribution is still primarily an S-box architecture rather than a complete AES datapath.",
 next:"This exposes a deeper trade-off: pipeline depth improves timing but can increase area and power. The next selected paper moves to complete AES datapath optimization.",
 adopt:["Pipeline-depth trade-off","Mathematical-to-hardware co-optimization","Hardware-friendly constant search","Full PPA reporting"],
 dont:["Do not reproduce a seven-stage S-box as the sole novelty."],
 doi:"https://doi.org/10.1109/ACCESS.2023.3284142",
 citations:"Uploaded paper + literature-review notes"
},
{
 id:"cheng2024",year:"2024",authors:"Pao-Ying Cheng, Ying-Cheng Su & Paul C.-P. Chao",
 title:"Novel High Throughput-to-Area Efficiency and Strong-Resilience Datapath of AES for Lightweight Implementation in IoT Devices",
 venue:"IEEE Internet of Things Journal",tags:["complete AES","32-bit","lightweight","CPA","ASIC","FPGA"],
 problem:"Balance throughput, hardware cost and security in a lightweight complete AES datapath for IoT devices.",
 novelty:"A 32-bit parallel datapath for 128-bit AES, shift-register-based storage, shared transformations, optimized S-box/inverse S-box and simultaneous encryption/decryption activity as a hiding-oriented power-analysis countermeasure.",
 methodology:["Four 32-bit processing paths for a 128-bit state.","Shift-register storage for ShiftRows, MixColumns and key expansion.","Composite-field S-box and reduced inverse S-box logic.","Shared ShiftRows/Inverse ShiftRows.","Matrix decomposition for MixColumns/InvMixColumns.","Dynamic key expansion.","CPA measurement and evaluation."],
 results:["692.65 Mb/s throughput","5.65K gates","122.59 Mb/s/k-gate FOM","~13,340 μm² reported chip area at 40 nm","CPA evaluation beyond 100,000 traces","~54.5% reduction in ShiftRows/InvShiftRows hardware in the reported comparison","~10% inverse S-box area reduction"],
 limitation:"The security evidence is specific to the evaluated CPA setup and threat model. Broader attack classes, SoC integration, configurability and hardware/software co-design remain possible research directions inferred from scope.",
 next:"This is the pivot from component-level optimization to complete-datapath + security-aware design.",
 adopt:["32-bit datapath","Shift-register data movement","Shared transformations","CPA methodology","PPA + security together"],
 dont:["Do not generalize CPA resistance to all physical attacks."],
 doi:"",
 citations:"Uploaded paper + literature-review notes"
},
{
 id:"feng2025",year:"2025",authors:"Feng et al.",
 title:"Optimizing AES S-Box Implementation: A SAT-Based Approach with Tower Field Representations",
 venue:"Computers, Materials & Continua",tags:["SAT","S-box","tower field","automated optimization"],
 problem:"Automate logic optimization of AES S-box substructures using tower-field representations.",
 novelty:"Combines tower-field representations with SAT-based optimization rather than relying only on manual Boolean simplification.",
 methodology:["Decompose inversion/transformation/multiplication.","Construct SAT optimization models.","Explore local solutions for hardware-efficient implementations.","Compare area/delay/AET/energy-oriented variants."],
 results:["31.35% reported reduction for a GF(2⁴) inversion implementation","22.22% reported reduction for a transformation-matrix implementation","Small-area and fast S-box variants"],
 limitation:"The central contribution remains S-box-focused. Its strongest transferable idea is automated design-space exploration.",
 next:"Automation can be extended from a single S-box to architecture-level choices such as field representation, sharing and pipeline boundaries.",
 adopt:["SAT/automated search","Tower-field representation","Multi-objective exploration"],
 dont:["Do not treat SAT-based S-box optimization as unexplored by itself."],
 doi:"https://doi.org/10.32604/cmc.2025.059882"
},
{
 id:"aesrv2025",year:"2025",authors:"Nguyen et al.",
 title:"AES-RV: Hardware-efficient RISC-V accelerator with low-latency AES instruction extension for IoT security",
 venue:"IEICE Electronics Express",tags:["RISC-V","custom instruction","SoC","FPGA","AES"],
 problem:"Reduce latency and improve throughput/energy efficiency of AES in RISC-V-based IoT systems.",
 novelty:"A specialized AES unit exposed through low-latency custom instructions and supported by high-bandwidth buffers, pipelining and ping-pong memory transfer.",
 methodology:["RISC-V custom instruction interface.","Specialized AES unit.","High-bandwidth internal buffers.","System pipelining.","Ping-pong memory movement.","ZCU102 FPGA evaluation."],
 results:["29,608 FFs","32,483 LUTs","12 BRAMs","AES-128/192/256 support","Large reported latency/throughput/energy-efficiency gains versus the paper's baselines"],
 limitation:"RISC-V + custom AES acceleration is already an established direction; a new contribution needs another differentiating dimension.",
 next:"Combine processor integration with reusable GF hardware, configurable PPA/security modes, or broader system-level co-design.",
 adopt:["Processor/accelerator interface","Memory-transfer optimization","System-level benchmarking"],
 dont:["Do not claim first RISC-V AES accelerator."],
 doi:"https://doi.org/10.1587/elex.22.20250329"
},
{
 id:"aesware2024",year:"2024",authors:"Choi et al.",
 title:"AESware: Developing AES-enabled low-power multicore processors leveraging open RISC-V cores with a shared lightweight AES accelerator",
 venue:"Engineering Science and Technology, an International Journal",tags:["RISC-V","multicore","shared accelerator","SoC"],
 problem:"Avoid duplicating AES hardware across multiple RISC-V cores and study energy at multicore system level.",
 novelty:"Shared lightweight AES accelerator serving multiple RISC-V cores.",
 methodology:["Dual/quad/octa-core configurations.","Shared AES accelerator.","FPGA prototyping.","45-nm synthesis/evaluation."],
 results:["Energy-saving study across multiple multicore configurations; reported savings depend on configuration and baseline."],
 limitation:"System-level sharing is already explored, so novelty should come from a new architecture, workload, security mechanism or optimization framework.",
 next:"Investigate configurable sharing, GF-level reuse or security-aware scheduling.",
 adopt:["Multicore sharing","System-level energy analysis"],
 dont:["Do not present shared RISC-V AES as entirely new."],
 doi:"https://doi.org/10.1016/j.jestch.2024.101894"
},
{
 id:"kassimi2026",year:"2026",authors:"Kassimi et al.",
 title:"Secure Implementation of RISC-V’s Scalar Cryptography Extension Set",
 venue:"Cryptography",tags:["RISC-V","Zkne","Zknd","DOM","side-channel","masking"],
 problem:"Implement RISC-V scalar AES cryptography extensions with protection against first-order power side-channel attacks.",
 novelty:"Domain-Oriented Masking applied to Zkne/Zknd AES instruction implementation, with pipeline-aware scheduling and assembly optimization.",
 methodology:["Masked AES instructions.","Domain-Oriented Masking.","Pipeline-aware instruction scheduling.","Artix-7 evaluation.","Security and overhead measurements."],
 results:["Reported ~0.39% area overhead to full 32-bit CV32E40S","Reported zero performance overhead when instructions are properly scheduled"],
 limitation:"Security evaluation targets a defined first-order power side-channel model; it does not establish universal resistance to all physical attacks.",
 next:"A new project can investigate architectural co-design where security mechanisms are optimized jointly with GF sharing, PPA and accelerator/SoC interfaces.",
 adopt:["Defined threat model","Security-overhead measurement","Pipeline-aware security implementation"],
 dont:["Do not claim generic physical-attack immunity."],
 doi:"https://doi.org/10.3390/cryptography10010006"
},
{
 id:"clmul2026",year:"2026",authors:"Recent RISC-V GF acceleration work",
 title:"Accelerating cryptographic primitives for secure embodied RISC-V systems using carryless multiplication",
 venue:"Future Generation Computer Systems",tags:["RISC-V","Zbc","GF","CLMUL","AES","GCM","Reed-Solomon"],
 problem:"Accelerate reusable GF arithmetic across multiple cryptographic/error-control primitives.",
 novelty:"Uses RISC-V carryless multiplication to accelerate GF algorithms and explores multiple hardware design points through PPA design-space exploration.",
 methodology:["Zbc/CLMUL-based GF algorithms.","Integration into the Azurite lightweight RISC-V core.","FPGA evaluation.","ASIC projection/design-space exploration.","Cross-primitive evaluation."],
 results:["Up to 5.1× AES speedup reported","3.5× Reed–Solomon and 1.8× GCM speedups reported","Up to 359 LUT overhead on Artix-7 in the reported design space","2.48 kGE reported at 22 nm/700 MHz"],
 limitation:"This strengthens the case for reusable GF acceleration; a new project needs a distinct architecture, security mechanism, configurability or broader evaluation.",
 next:"A reusable GF engine coupled to AES/CRC/GCM or other primitives could connect the 2019 shared-GF idea with modern RISC-V ISA-level acceleration.",
 adopt:["Reusable GF engine","PPA design-space exploration","Cross-primitive benchmarking"],
 dont:["Do not claim GF acceleration for AES alone is unexplored."],
 doi:"https://doi.org/10.1016/j.future.2026.108804"
},
{
 id:"ahmed2026",year:"2026",authors:"Ahmed et al.",
 title:"Ultra lightweight AES S-box ASIC hardware for low-power IoT devices",
 venue:"Scientific Reports",tags:["S-box","CFA","ASIC","low-power","32 nm"],
 problem:"Minimize S-box area and power for constrained IoT ASICs.",
 novelty:"Unified transformation engine combining affine/inverse-isomorphic operations with shared multiplier-XOR networks in a GF((2⁴)²) composite-field design.",
 methodology:["Composite Galois-field arithmetic.","Isomorphic/inverse-isomorphic mappings.","Logic minimization.","Substructure reuse.","32-nm post-layout analysis."],
 results:["892.86 MHz","7.14 Gb/s","411 μm² core area","192 μW total power","17.39 Mb/s/μm² reported efficiency"],
 limitation:"It reinforces how crowded CFA S-box optimization is; a new S-box-only paper would need a different research dimension.",
 next:"Move to complete datapath, reusable GF, RISC-V/SoC, security-aware optimization or automated architecture exploration.",
 adopt:["Substructure reuse","Unified transformations","Post-layout PPA methodology"],
 dont:["Do not use CFA S-box optimization alone as the novelty claim."],
 doi:"https://doi.org/10.1038/s41598-026-69487-2"
},
{
 id:"hojati2024",year:"2024/2025",authors:"Hojati et al.",
 title:"Sharing AES Engine for RISC-V Custom Instructions Performing Encryption and Decryption",
 venue:"IEEE East-West Design & Test Symposium",tags:["RISC-V","shared AES","custom instruction","enc/dec"],
 problem:"Use one AES hardware engine for encryption and decryption under a RISC-V custom-instruction interface.",
 novelty:"Shared AES hardware supporting both encryption and decryption through custom instructions.",
 methodology:["Four custom instructions.","Shared AES datapath.","RISC-V processor integration.","Performance comparison with software."],
 results:["Nearly 19× speedup over software reported in the authors' evaluation."],
 limitation:"Shared enc/dec RISC-V AES already exists; a new contribution needs another axis such as GF reuse, configurable PPA/security or broader SoC evaluation.",
 next:"Treat this as prior art when positioning a RISC-V shared AES engine.",
 adopt:["Shared enc/dec architecture","Custom instruction interface"],
 dont:["Do not claim shared RISC-V enc/dec AES as first-of-kind."],
 doi:"https://doi.org/10.1109/EWDTS63723.2024.10873766"
}
];

const CORE_IDS=["noor2019","teng2021","lin2023","cheng2024"];
const RECENT_IDS=["feng2025","aesrv2025","aesware2024","kassimi2026","clmul2026","ahmed2026","hojati2024"];

const GAP_ITEMS=[
["S-box-only novelty is crowded","CFA, pipelining, logic minimization, unified enc/dec S-boxes and SAT optimization are all represented in recent work.","DON'T STOP AT S-BOX"],
["AES accelerator alone is crowded","RISC-V custom AES instructions, shared engines and SoC accelerators are already published.","SYSTEM-LEVEL QUESTION"],
["Security must be measurable","Define the attack, leakage model, traces, success criterion, overhead and baseline.","MEASURE IT"],
["GF is bigger than AES","Recent RISC-V work treats carryless multiplication as reusable GF acceleration across AES, GCM and Reed–Solomon.","REUSABLE GF"],
["PPA and security interact","Masking, hiding, balancing and extra registers can alter area, timing, power and throughput.","PPA × SECURITY"],
["Automation is entering the design loop","SAT-based optimization demonstrates automated exploration of hardware logic choices.","AUTOMATE"]
];

const NOVELTY=[
["Configurable RISC-V AES accelerator","A single accelerator exposes controlled throughput/area/energy/security operating points.","Possible question: can one microarchitecture expose useful PPA/security modes without duplicating full AES datapaths?"],
["Reusable GF cryptographic engine","Move from AES-only hardware to a GF engine usable by AES and other primitives such as GCM or Reed–Solomon.","Connects Noor's shared GF idea with modern RISC-V GF acceleration."],
["GF accelerator + side-channel-aware datapath","Jointly optimize resource sharing, masking/hiding and scheduling.","Measure security overhead instead of asserting security."],
["PPA–security design-space exploration","Treat pipeline depth, datapath width, sharing, masking/hiding and clocking as design variables.","Output Pareto points across area, energy, throughput and leakage/security metrics."],
["Hardware–software co-design for RISC-V","Study custom instructions, memory movement, accelerator invocation and SoC bottlenecks.","Benchmark software, hardware and hybrid AES paths."],
["Automated AES hardware optimization","Use SAT/logic synthesis/search across architecture choices, not only one S-box.","Search field representation, sharing and pipeline boundaries under constraints."]
];
