---
title: Using Travis CI with Spinnaker
---


Question:
Can I use Travis CI with Spinnaker?
Answer:
Yes you can! Just like Jenkins, Spinnaker has a native integration with Travis. You can easily use it to trigger deployments once CI builds finish. However, unlike with Jenkins, you *cannot* use Travis to run arbitrary jobs. This is more of a limitation imposed by Travis than a limitation of Spinnaker itself.
Configuring a Travis Master:
[Igor](https://github.com/spinnaker/igor) is the Spinnaker service responsible for interacting with external CI systems like Jenkins and Travis. So, in order to configure a Travis Master, you’ll need to add the following configuration to ```igor-local.yml```.
travis:
  enabled: true
  # Travis names are prefixed with travis- inside igor.
  masters:
  - name: ci # This will show as travis-ci inside spinnaker.
    baseUrl: https://travis-ci.org
    address: https://api.travis-ci.org
    githubToken: a-github-token
  regexes:
  - /Upload https?:\/\/.+\/(.+\.(deb|rpm))/

You can configure multiple Travis masters by adding more entries under the ```masters``` key.
The ```regexes``` key is used to parse build information out of the Travis build log using the ```art``` CLI. This information is then used by Spinnaker pipelines to inform Bake stages which package versions should be installed during a bake stage.
Finally, in order to ensure that Igor is enabled, add the following to ```spinnaker-local.yml```:
services:
  igor:
    enabled: true

