---
description: Representation Learning for Hybrid Patient Data and Recovery Trajectory
  Visualization in the Patient Latent Space
last_update: '2026-06-29T12:03:26.373735+00:00'
layout: project
repository: https://github.com/lufixSch/master_thesis
repository_icon: github
status: finished
title: Master Thesis
update: https://raw.githubusercontent.com/lufixSch/master_thesis/master/README.md
---

# Master Thesis: Representation Learning for Hybrid Patient Data and Recovery Trajectory Visualization in the Patient Latent Space

This repository contains all resources for my Master's Thesis on "Representation Learning for Hybrid Patient Data and Recovery Trajectory Visualization in the Patient Latent Space".

The codebase provides a comprehensive framework for training, benchmarking, and comparing different deep SOM approaches on patient data. The full report can be found at [`report/main.pdf`](https://github.com/lufixSch/master_thesis/blob/master/./report/main.pdf).

## Abstract

Intensive Care Units produce complex, high-dimensional data through continuous patient monitoring. The increasing data volume from high-frequency physiological recordings has become overwhelming for clinical caregivers to fully analyze and diagnose manually. Machine learning can breach this gap by extracting relevant insights from such data. However, clinical deployment requires strong predictive performance as well as explainability of the results. This thesis investigates deep Self-Organizing Map (SOM) architectures as a framework for patient state representation and visualization of the recovery trajectory in the latent space.

The proposed approach integrates Variational Autoencoders (VAE) with Self-Organizing Maps to create a powerful and interpretable clustering framework. To address the temporal nature of patient data, multiple sequence modeling architectures including Long Short-Term Memory (LSTM) networks and Temporal Convolutional Networks (TCN), are investigated. Furthermore, static patient information such as demographics and admission diagnoses is integrated through conditioning mechanisms based on Conditional VAEs and Gated Residual Networks (GRN).

Experiments were conducted on a filtered and preprocessed version of the eICU Collaborative Research Database, containing over $10,000$ patient stays. The models were evaluated on clustering performance as well as multiple downstream tasks including mortality, discharge location, and APACHE II score prediction. Models are first pretrained in a self-supervised manner and then fine-tuned on the downstream tasks using a multi-head prediction architecture.

Results demonstrate that sequence modeling architectures and especially LSTM models, provide meaningful improvements in latent space structure and predictive performance compared to feed-forward baselines after fine-tuning. The LSTM models consistently achieved superior clustering metrics with improvements in Moran's I as well as NMI and enhanced predictive accuracy across all tasks. Experiments with static conditioning yielded mixed results, showing improvements in spatial autocorrelation (Moran's I) for most architectures while exhibiting inconsistent effects on cluster purity (NMI) as well as downstream tasks.

Analysis of the patients recovery trajectory in the latent space revealed that patient state transitions remained hard to predict even with sequence models, indicating that explicit temporal regularization is necessary to enforce a smooth trajectory.

This work lays the groundwork for interpretable representation learning of hybrid patient data and demonstrates the feasibility of combining sequence models, static conditioning, variational autoencoders and SOM visualization to support clinical decision making. While challenges remain in trajectory predictability and robustness of static conditioning, the experiments provide encouraging evidence for further investigation and refinement of these approaches.

## Install

This project uses [`uv`](https://github.com/astral-sh/uv) to setup and manage its dependencies and virtual environment. While installation without `uv` is possible, it is not recommended and will therefore not be explained in this documentation.

1. Make sure you have a working python environment and install `uv` as described [here](https://docs.astral.sh/uv/#installation).

2. Clone the repository

```bash
   git clone https://github.com/lufixSch/master_thesis.git
   cd project
```

3. Create the virtual environment and install the project and its dependencies.

```bash
# For CPU-only installation
uv sync --extra cpu

# For NVIDIA CUDA support (cu128)
uv sync --extra cuda

# For AMD ROCm support
uv sync --extra rocm
```

## Getting Started

After successful installation, you can now run the different scripts provided by the project using `uv`.

```bash
uv run <name_of_the_script> [OPTIONS]
```

Every script provides a `--help` option which prints an explanation including all available arguments.

```bash
uv run <name_of_the_script> --help
```

You can also import the python module into other projects or for example jupyter notebooks under the `rlhpd` name.

```python
from rlhpd.models import DSOM

model = DSOM(...)
```

### Available Commands

The project provides numerous command-line scripts for training, benchmarking, and analysis. After installation, these commands are available:

### Data Processing

```bash
uv run analyze <name> <hdf5 source>
```

This will calculate statistics for the given HDF5 table and produce corresponding plots. Results are stored at `plots/data/<name>`.

> [!NOTE]
> When `--time-column` is given, the script will produce additional statistics specifically for timeseries data.

```bash
uv run preprocessor
uv run preprocessor_ratschlab
```

Preprocesses the eICU dataset and produce a dataset, that can be used for model training. `preprocessor_ratschlab` uses the original pipeline from the T-DPSOM paper. It can only be used for training **WITHOUT** static conditioning as static data is not part of the pipeline. `prerpocessor` is an RAM optimized highly configurable preprocessing pipeline for creating a dataset specific to your needs.

> [!NOTE]
> Both pipeline require you to first gain access to the [eICU Colaborative Research Database](https://eicu.mit.edu/) and download it (to `data/eicu/2.0` by default).

The `data/eicu/processed` directory already contains configuration files to produce a dataset similar to the T-DPSOM paper. They are automatically used when in the output directory (`--out` argument) and `--skip` is set. If no configuration is provided `preprocessor` will use defaults for labels, static and timeseries variables. For a custom configurations it is recommended to run the script once and then adjust the created `.json` files to your need.

> [!NOTE]
> The `preprocessor_ratschlab` script requires the download of the [`normalization_values.h5`](https://github.com/ratschlab/dpsom/blob/master/data/time_grid/normalization_values.h5) from the T-DPSOM repository into the output directory (`--out` argument).

### Model Training

```bash
uv run train_som <name>
uv run train_vae <name>
uv run train_predictor <name>
uv run train_dsom <name>
uv run train_dpsom <name>
```

Training scripts for different models/parts of the deep SOM model. By default checkpoints of the models are saved at `models/<model>/<name>`. All scripts use _tensorboard_ to log training/validation loss. They are saved at `logs/<model>/<name>` and can be shown in the WebUI:

```bash
uv run tensorboard --log-dir logs/...
```

> [!NOTE]
> Training scripts allow the configuration of hyperparameters using command line arguments or a `.json` config. For available configurations see the help (`--help`) of the specific model.

> [!WARNING]
> While the project contains scripts for training a reproduction of the original DPSOM/T-DPSOM (`train_ratschlab_dpsom`, `train_ratschlab_tdpsom`), they might not work as expected with the current state of the project.

```bash
uv run train_dsom_batch <name>
```

Variation of the regular training script, that allows to do multiple training runs with the same configuration. Checkpoints and logs for each training run are saved in a corresponding subdirectory (i.e. `models/dsom/<name>/0` and `logs/dsom/<name>/0` for run 0).

```bash
tune_vae <name>
tune_predictor <name>
```

Tune hyperparameters for the given model using [optuna](https://optuna.readthedocs.io). Requires some understanding of the code as static hyperparameters and value ranges need to be set in the source code.

### Benchmarking

```bash
uv run benchmark_som <name> <path/to/checkpoint.pth>
uv run benchmark_vae <name> <path/to/checkpoint.pth>
uv run benchmark_prediction <name> <path/to/checkpoint.pth>
uv run benchmark_dsom <name> <path/to/checkpoint.pth>
uv run benchmark_dpsom <name> <path/to/checkpoint.pth>
```

These scripts calculate metrics and generate plots for a given checkpoint of the model to evaluate its performance.

> [!NOTE]
> `benchmark_dsom` also accepts a path to a directory. It will then run benchmarks for the model before and after fine-tuning using the _final_ checkpoint.

```bash
benchmark_dsom_batch <name> <path/to/batch>
```

Variation of the regular benchmark script, that allows to benchmark all models created with `train_dsom_batch` at once. Results for each training run are saved in a corresponding subdirectory (i.e. `plots/benchmarks/dsom/<name>/0` for run 0)

```bash
compare_dsom <name> <path/to/benchmarks>
```

Calculates average metrics and standard deviation for each batch and compares different batches against each other. Requires you to run `benchmark_dsom_batch` first. `path/to/benchmarks` should contain multiple directories where each contains the resulting benchmarks of one batch.

### Utilities

```bash
uv run select_plot <path/to/batch> <metric_file> <metric_name>
```

This script helps to find a representative model in a batch. It prints the index of the min, max and median training run in that batch in respect to the given metric.

- `<metric_file>` is the name of the `.json` file containing the metric (i.e. `som_clustering` for `som_clustering.json` or `ft/som_clustering` for `ft/som_clustering.json`)
- `<metric_name>` is the name of the metric with dot syntax (i.e. `mortality.morans_i` for `{ "mortality": { "morans_i": <value> } }`)

## Project Structure

```
project/
├── code/                           # Main source code
│   ├── benchmark/                  # Model benchmarking and evaluation
│   ├── data/                       # Data loading and preprocessing
│   │   └── ratschlab_preproc/      # Original preprocessing pipeline from the T-DPSOM paper
│   ├── models/                     # Model implementations
│   ├── plot/                       # Visualization utilities
│   ├── scripts/                    # Utility scripts
│   └── training/                   # Training pipelines
├── data/
│   └── eicu/                       # Default data directory
│       ├── 2.0                     # Original eICU dataset
│       ├── hdf/                    # eICU tables in HDF5 format
│       └── processed/              # Default location for the preprocessed dataset
├── logs/                           # Default location for training logs
├── models/                         # Default location for model checkpoints
├── plots/                          # Default location for plots and other benchmark results
├── report/                         # Thesis document
```

> [!NOTE]
> `code/ratschlab_preproc` contains the original preprocessing pipeline from the T-DPSOM paper with some adjustments to work with this setup and reduce memory usage. Additionally some seemingly missing parts of the pipeline where added based on the descriptions in the paper. The full diff between this and the original code can be seen in [`code/data/ratschlab_preproc/changes.patch`](https://github.com/lufixSch/master_thesis/blob/master/./code/data/ratschlab_preproc/changes.patch)

## Citation

If you use this code in your research, please cite the associated Master's Thesis:

```bibtex
@mastersthesis{schuettlerRepresentationLearning2026,
  author = {Schüttler, Lukas},
  title = {Representation Learning for Hybrid Patient Data and Recovery Trajectory Visualization in the Patient Latent Space},
  school = {Technical University Munich},
  year = {2026}
}
```

## Support

For questions or issues, feel free to open an issue on the repository.