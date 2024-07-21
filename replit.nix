{pkgs}: {
  deps = [
    pkgs.ihaskell
    pkgs.haskellPackages.shh
    pkgs.chatgpt-retrieval-plugin
    pkgs.python311Packages.clvm-tools
    pkgs.sptk
    pkgs.openssh
   ];
}
