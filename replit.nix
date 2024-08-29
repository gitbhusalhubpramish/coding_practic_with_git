{pkgs}: {
  deps = [
    pkgs.http-server
    pkgs.xiu
    pkgs.temurin-jre-bin
    pkgs.zulu11
    pkgs.ihaskell
    pkgs.haskellPackages.shh
    pkgs.chatgpt-retrieval-plugin
    pkgs.python311Packages.clvm-tools
    pkgs.sptk
    pkgs.openssh
   ];
}
